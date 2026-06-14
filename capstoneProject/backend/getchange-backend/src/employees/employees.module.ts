import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employees.entity';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { CreateEmployeeProvider } from './providers/create-employee.provider';
import { DeleteEmployeeProvider } from './providers/delete-employee.provider';
import { FindAllEmployeesProvider } from './providers/find-all-employees.provider';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee]),
  ],
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
    CreateEmployeeProvider,
    DeleteEmployeeProvider,
    FindAllEmployeesProvider,
  ],
})
export class EmployeesModule {}