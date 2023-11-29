import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../common/base/base.entity';
import { Course } from '../../courses/entities/course.entity';
import { Enrollment } from '../../enrollments/entities/enrollment.entity';

@Entity()
export class Inscription extends BaseEntity {
  @ManyToOne(() => Enrollment, (enrollment) => enrollment.inscriptions)
  enrollment: Enrollment;

  @ManyToOne(() => Course, (course) => course.inscriptions)
  course: Course;
}
