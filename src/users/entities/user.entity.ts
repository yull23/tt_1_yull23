import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from '../../common/base/base.entity';
import { ListRole } from '../../common/enums/list-role.enum';
import { IUser } from '../../common/interfaces/user.interface';
import { Student } from '../../students/entities/student.entity';
import { Teacher } from '../../teachers/entities/teacher.entity';

@Entity()
export class User extends BaseEntity implements IUser {
  @Column()
  @IsNotEmpty()
  firstName: string;

  @Column()
  @IsNotEmpty()
  lastName: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ type: 'enum', default: ListRole.Student, enum: ListRole })
  @IsNotEmpty()
  role: ListRole;

  @Column({ nullable: false, select: false })
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(50)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
  password: string;

  @OneToOne(() => Teacher, (teacher) => teacher.user, { eager: true })
  teacher: Teacher;

  @OneToOne(() => Student, (student) => student.user, { eager: true })
  student: Student;
}
