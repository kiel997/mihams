import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../employees.entity';
import { CreateEmployeeDto } from '../dto/create-employee.dto';

@Injectable()
export class CreateEmployeeProvider {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ) {
    const employee =
      this.employeeRepository.create(
        createEmployeeDto,
      );

    return await this.employeeRepository.save(
      employee,
    );
  }
}