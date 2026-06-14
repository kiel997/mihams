import { Injectable } from '@nestjs/common';
import { CreateEmployeeProvider } from './providers/create-employee.provider';
import { DeleteEmployeeProvider } from './providers/delete-employee.provider';
import { FindAllEmployeesProvider } from './providers/find-all-employees.provider';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    private readonly createEmployeeProvider: CreateEmployeeProvider,
    private readonly deleteEmployeeProvider: DeleteEmployeeProvider,
    private readonly findAllEmployeesProvider: FindAllEmployeesProvider,
  ) {}

  async findAll() {
    return this.findAllEmployeesProvider.findAll();
  }

  async create(
    createEmployeeDto: CreateEmployeeDto,
  ) {
    return this.createEmployeeProvider.createEmployee(
      createEmployeeDto,
    );
  }

  async delete(id: number) {
    return this.deleteEmployeeProvider.deleteEmployee(
      id,
    );
  }
}