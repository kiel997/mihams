import { Injectable, UnauthorizedException,} from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { FindOneByEmailProvider } from '../users/providers/find-one-by-email.provider';

@Injectable()
export class AuthService {
  constructor(
    private readonly findOneByEmailProvider: FindOneByEmailProvider,
    private readonly jwtService: JwtService,
  ) {}

  async login(
    email: string,
    password: string,
  ) {
    const user =
      await this.findOneByEmailProvider.findOneByEmail(
        email,
      );

    if (!user) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    const passwordMatches =
      await bcrypt.compare(
        password,
        user.password,
      );

    if (!passwordMatches) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    const accessToken =
      await this.jwtService.signAsync({
        sub: user.id,
        email: user.email,
      });

    return {
      accessToken,
    };
  }

  async forgotPassword(email: string) {
    try {
      await this.findOneByEmailProvider.findOneByEmail(
        email,
      );
    } catch (error) {}

    return {
      success: true,
      message:
        'a reset link has been sent to your email.',
    };
  }
}