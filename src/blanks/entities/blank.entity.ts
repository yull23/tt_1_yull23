import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  password: string;
}
