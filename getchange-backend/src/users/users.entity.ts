import {Entity,PrimaryGeneratedColumn,Column, CreateDateColumn,} from 'typeorm';

@Entity()
export class User {
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
  password!: string;

  @Column()
  businessName!: string;

  @Column()
  businessAddress!: string;

  @Column()
  phone!: string;

  @CreateDateColumn()
  createdAt!: Date;
}