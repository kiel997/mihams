import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,} from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({
    unique: true,
  })
  email!: string;

  @Column()
  phone!: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'staff'],
    default: 'staff',
  })
  role!: string;

  @CreateDateColumn()
  createdAt!: Date;
}