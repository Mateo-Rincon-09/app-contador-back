import { prisma } from '../../../config/prisma';
import bcrypt from 'bcrypt';
import { LoginUserDto, RegisterUserDto } from '../../../domain';
import { JwtAdapter } from '../../../config/jwt.adapter';

export class AuthService {
	public async register(registerDto: RegisterUserDto) {
		const hashed = await bcrypt.hash(registerDto.password, 10);
		try {
			const user = await prisma.user.create({
				data: {
					name: registerDto.name,
					lastName: registerDto.lastName,
					email: registerDto.email,
					password: hashed,
				}
			});
			const token = await JwtAdapter.generateToken({ id: user.id });
			if (!token) throw new Error('Error al generar token');

			return {
				user: user,
				token: token,
			};

		} catch (error) {

			if (error) {
				throw new Error('Email ya registrado');
			}
			throw error;
		}
	}

	public async login(loginDto: LoginUserDto) {
		const user = await prisma.user.findUnique({
			where: { email: loginDto.email }
		});
		if (!user) throw new Error('Usuario no encontrado');

		const isMatch = await bcrypt.compare(loginDto.password, user.password);
		if (!isMatch) throw new Error('Contraseña incorrecta');

		const token = await JwtAdapter.generateToken({ id: user.id });
		if (!token) throw new Error('Error al generar token');

		return {
			user: user,
			token: token,
		};
	}

	public async updatePassword(userId: string, newPassword: string) {
		const hashed = await bcrypt.hash(newPassword, 10);
		try {
			const updatedUser = await prisma.user.update({
				where: { id: userId },
				data: { password: hashed },
			});
			return updatedUser;
		} catch (error) {
			throw new Error('Error al actualizar contraseña');
		}
	}

}


