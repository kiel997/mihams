import { Injectable } from '@nestjs/common';
import { FindOneByEmailProvider } from '../users/providers/find-one-by-email.provider';

@Injectable()
export class AuthService {
  constructor(
    private readonly findOneByEmailProvider: FindOneByEmailProvider,
  ) {}

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