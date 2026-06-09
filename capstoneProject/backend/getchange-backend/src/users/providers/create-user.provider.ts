import {Injectable,ConflictException,} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../users.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserProvider {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<User> {
    const existingUser =
      await this.usersRepository.findOne({
        where: {
          email: createUserDto.email,
        },
      });

    if (existingUser) {
      throw new ConflictException(
        'Email already exists',
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        createUserDto.password,
        10,
      );

    const user =
      this.usersRepository.create({
        ...createUserDto,
        password: hashedPassword,
      });

    return await this.usersRepository.save(user);
  }
}