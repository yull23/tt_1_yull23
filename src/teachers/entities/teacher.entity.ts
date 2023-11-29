import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../../common/base/base.entity';
import { ITeacher } from '../../common/interfaces/teacher.interface';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Teacher extends BaseEntity implements ITeacher {
  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ unique: true })
  teacherCode: string;

  // @OneToMany(() => Course, (course) => course.teacher)
  // courses: Course[];
}
