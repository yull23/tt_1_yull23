import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../common/base/base.entity';
import { ISemester } from '../../common/interfaces/semeter.interface';
import { Enrollment } from '../../enrollments/entities/enrollment.entity';

@Entity()
export class Semester extends BaseEntity implements ISemester {
  @Column({ unique: true })
  name: string;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.semester, {
    cascade: true,
  })
  enrollments: Enrollment[];
}
