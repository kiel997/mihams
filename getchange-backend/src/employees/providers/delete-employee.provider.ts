import {Injectable, NotFoundException,} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../employees.entity';

@Injectable()
export class DeleteEmployeeProvider {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async deleteEmployee(id: number) {
    const employee =
      await this.employeeRepository.findOne({
        where: { id },
      });

    if (!employee) {
      throw new NotFoundException(
        'Employee not found',
      );
    }

    await this.employeeRepository.remove(
      employee,
    );

    return {
      message:
        'Employee deleted successfully',
    };
  }
}