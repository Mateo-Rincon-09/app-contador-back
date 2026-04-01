import { prisma } from '../../../config/prisma';
import bcrypt from 'bcrypt';
import { LoginUserDto, RegisterUserDto } from '../../../domain';
import { JwtAdapter } from '../../../config/jwt.adapter';

export class AuthService {
	public async register(registerDto: RegisterUserDto) {
		const hashed = await bcrypt.hash(registerDto.password, 10);
		const hashedConfirm = await bcrypt.hash(registerDto.confirmPassword, 10);
		try {
			const user = await prisma.user.create({
				data: {
					name: registerDto.name,
					lastName: registerDto.lastName,
					email: registerDto.email,
					password: hashed,
					confirmPassword: hashedConfirm,
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



}


