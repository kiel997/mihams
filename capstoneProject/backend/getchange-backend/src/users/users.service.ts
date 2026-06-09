import { Injectable } from '@nestjs/common';
import { CreateUserProvider } from './providers/create-user.provider';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly createUserProvider: CreateUserProvider,
  ) {}

  async register(
    createUserDto: CreateUserDto,
  ) {
    return this.createUserProvider.createUser(
      createUserDto,
    );
  }
}