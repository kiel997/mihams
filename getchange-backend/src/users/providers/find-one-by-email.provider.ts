import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users.entity';

@Injectable()
export class FindOneByEmailProvider {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findOneByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: { email },
    });
  }
}