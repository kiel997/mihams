import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CreateUserProvider } from './providers/create-user.provider';
import { FindOneByEmailProvider } from './providers/find-one-by-email.provider';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    CreateUserProvider,
    FindOneByEmailProvider
  ],
  exports: [UsersService, FindOneByEmailProvider],
})
export class UsersModule {}