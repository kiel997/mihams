import {IsEmail,IsNotEmpty, IsIn,} from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  firstName!: string;

  @IsNotEmpty()
  lastName!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  phone!: string;

  @IsIn(['admin', 'staff'])
  role!: string;
}