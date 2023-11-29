import { MinLength } from 'class-validator';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../common/base/base.entity';
import { ICourse } from '../../common/interfaces/course.interface';
import { Inscription } from '../../inscriptions/entities/inscription.entity';
import { Teacher } from '../../teachers/entities/teacher.entity';

@Entity()
export class Course extends BaseEntity implements ICourse {
  @Column({ unique: true })
  @MinLength(6)
  name: string;

  @Column()
  credits: number;

  @Column({ unique: true })
  courseCode: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.courses, {
    nullable: true,
    eager: true,
  })
  teacher: Teacher;

  @OneToMany(() => Inscription, (inscription) => inscription.course)
  inscriptions: Inscription[];
}
