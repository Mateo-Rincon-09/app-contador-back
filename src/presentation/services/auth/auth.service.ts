import { prisma } from '../../../config/prisma';
import { ChangePasswordDto, ForgotPasswordDto, LoginUserDto, RegisterUserDto, ResendVerificationDto, ResetPasswordDto } from '../../../domain';
import { JwtAdapter } from '../../../config/jwt.adapter';
import { EmailService } from '../email/email.service';
import { TokenType } from '../../../generated/prisma/client';
import { TokenService } from '../token/token.service';
import bcrypt from 'bcrypt';
import admin from '../../../config/firebaseAdmin';

export class AuthService {

	private readonly emailService = new EmailService();
	private readonly tokenService = new TokenService();

	public async testEmail() {

		const emailService = new EmailService();

		const sent = await emailService.sendEmail({
			to: 'TU_CORREO@gmail.com',
			subject: 'Prueba App Contador',
			html: `
            <h1>Correo de prueba</h1>
            <p>Si recibes este correo Gmail funciona correctamente.</p>
        `
		});

		if (!sent) {
			throw new Error('No se pudo enviar el correo');
		}

		return {
			message: 'Correo enviado'
		};
	}

	public async verifyEmail(token: string) {

		const tokenData = await this.tokenService.validateToken(
			token,
			TokenType.EMAIL_VERIFICATION
		);

		if (!tokenData) {
			throw new Error('Token inválido o expirado');
		}

		const user = await prisma.user.update({
			where: {
				id: tokenData.userId
			},
			data: {
				emailVerified: true
			}
		});

		await this.tokenService.markAsUsed(tokenData.id);

		await this.emailService.sendWelcomeEmail(user.email, user.name);

		return {
			message: 'Correo verificado correctamente'
		};
	}

	public async resendVerification(dto: ResendVerificationDto) {

		const user = await prisma.user.findUnique({
			where: {
				email: dto.email
			}
		});

		if (!user) {
			throw new Error('Usuario no encontrado');
		}

		if (user.emailVerified) {
			throw new Error('El correo ya fue verificado');
		}

		const verificationToken = await this.tokenService.createToken(
			user.id,
			TokenType.EMAIL_VERIFICATION,
			60 * 24
		);

		const emailSent = await this.emailService.sendVerificationEmail(
			user.email,
			user.name,
			verificationToken
		);

		if (!emailSent) {
			throw new Error('No se pudo enviar el correo');
		}

		return {
			message: 'Se envió un nuevo correo de verificación'
		};

	}

	public async register(registerDto: RegisterUserDto) {

		const hashed = await bcrypt.hash(registerDto.password, 10);

		try {

			const user = await prisma.user.create({
				data: {
					name: registerDto.name,
					lastName: registerDto.lastName,
					email: registerDto.email,
					password: hashed,
					emailVerified: false
				}
			});

			const verificationToken = await this.tokenService.createToken(
				user.id,
				TokenType.EMAIL_VERIFICATION,
				60 * 24 // 24 horas
			);

			const emailSent = await this.emailService.sendVerificationEmail(
				user.email,
				user.name,
				verificationToken
			);

			if (!emailSent) {
				throw new Error('No se pudo enviar el correo de verificación');
			}

			return {
				message: 'Revisa tu correo para verificar tu cuenta'
			};

		} catch (error: any) {

			if (
				error?.code === 'P2002'
			) {
				throw new Error('El correo ya está registrado');
			}

			throw error;
		}
	}

	public async login(loginDto: LoginUserDto) {
		const user = await prisma.user.findUnique({
			where: { email: loginDto.email }
		});
		if (!user) throw new Error('Usuario o contraseña incorrectas');

		if (!user.emailVerified) {
			throw new Error('Debes verificar tu correo antes de iniciar sesión');
		}

		const isMatch = await bcrypt.compare(loginDto.password, user.password);
		if (!isMatch) throw new Error('Usuario o contraseña incorrectas');

		const token = await JwtAdapter.generateToken({ id: user.id });
		if (!token) throw new Error('Error al generar token');

		return {
			user: user,
			token: token,
		};
	}

	public async loginGoogle(firebaseToken: string) {
		const decodedToken = await admin.auth().verifyIdToken(firebaseToken);

		const email = decodedToken.email;

		if (!email) {
			throw new Error('Email no encontrado');
		};

		let user = await prisma.user.findUnique({
			where: {
				email
			}
		});

		if (!user) {
			user = await prisma.user.create({
				data: {
					email,
					name: decodedToken.name || '',
					password: '',
					emailVerified: true,
				}
			})
		};

		const token = await JwtAdapter.generateToken({
			id: user.id
		});

		if (!token) {
			throw new Error('Error al generar token');
		}

		return {
			user,
			token,
		};
	}


	public async forgotPassword(dto: ForgotPasswordDto) {

		const user = await prisma.user.findUnique({
			where: {
				email: dto.email
			}
		});

		if (!user?.emailVerified) {
			return {
				message:
					"Si existe una cuenta asociada a este correo, recibirás un enlace para restablecer tu contraseña."
			};
		}

		if (!user) {
			return {
				message:
					"Si existe una cuenta asociada a este correo, recibirás un enlace para restablecer tu contraseña."
			};
		}

		const token = await this.tokenService.createToken(
			user.id,
			TokenType.PASSWORD_RESET,
			30
		);

		await this.emailService.sendResetPasswordEmail(
			user.email,
			user.name,
			token
		);

		return {
			message:
				"Si existe una cuenta asociada a este correo, recibirás un enlace para restablecer tu contraseña."
		};

	}

	public async resetPassword(dto: ResetPasswordDto) {

		const tokenData = await this.tokenService.validateToken(
			dto.token,
			TokenType.PASSWORD_RESET
		);

		if (!tokenData) {
			throw new Error("Token inválido o expirado");
		}

		const hashed = await bcrypt.hash(dto.password, 10);

		await prisma.user.update({
			where: {
				id: tokenData.userId
			},
			data: {
				password: hashed
			}
		});

		await this.tokenService.markAsUsed(tokenData.id);

		await this.emailService.sendPasswordChangedEmail(
			tokenData.user.email,
			tokenData.user.name
		);

		return {
			message: "Contraseña actualizada correctamente"
		};

	}

	public async validateResetToken(token: string) {

		const tokenData = await this.tokenService.validateToken(
			token,
			TokenType.PASSWORD_RESET
		);

		if (!tokenData) {
			throw new Error("Token inválido o expirado");
		}

		return {
			message: "Token válido"
		};
	}

	public async changePassword(userId: string, dto: ChangePasswordDto) {

		const user = await prisma.user.findUnique({
			where: {
				id: userId
			}
		});

		if (!user) {
			throw new Error("Usuario no encontrado");
		}

		const isMatch = await bcrypt.compare(dto.currentPassword, user.password);

		if (!isMatch) {
			throw new Error("La contraseña actual es incorrecta");
		}

		const hashed = await bcrypt.hash(
			dto.newPassword,
			10
		);

		await prisma.user.update({
			where: {
				id: userId
			},
			data: {
				password: hashed
			}
		});

		await this.emailService.sendPasswordChangedEmail(
			user.email,
			user.name
		);

		return {
			message:
				"Contraseña actualizada correctamente"
		};

	}

}