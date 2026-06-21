import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../employees.entity';

@Injectable()
export class FindAllEmployeesProvider {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async findAll() {
    return await this.employeeRepository.find();
  }
}