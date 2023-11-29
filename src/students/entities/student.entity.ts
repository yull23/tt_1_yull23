import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../common/base/base.entity';
import { IStudent } from '../../common/interfaces/student.interface';
import { Enrollment } from '../../enrollments/entities/enrollment.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Student extends BaseEntity implements IStudent {
  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ unique: true })
  studentCode: string;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
  enrollments: Enrollment[];
}
