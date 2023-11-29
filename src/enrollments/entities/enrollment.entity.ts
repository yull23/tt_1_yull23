import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../common/base/base.entity';
import { Inscription } from '../../inscriptions/entities/inscription.entity';
import { Semester } from '../../semesters/entities/semester.entity';
import { Student } from '../../students/entities/student.entity';

@Entity()
export class Enrollment extends BaseEntity {
  @ManyToOne(() => Semester, (semester) => semester.enrollments)
  semester: Semester;

  @ManyToOne(() => Student, (student) => student.enrollments)
  student: Student;

  @OneToMany(() => Inscription, (inscription) => inscription.enrollment)
  inscriptions: Inscription[];
}
