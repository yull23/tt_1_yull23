import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from 'src/courses/courses.module';
import { EnrollmentsModule } from 'src/enrollments/enrollments.module';
import { Inscription } from './entities/inscription.entity';
import { InscriptionsController } from './inscriptions.controller';
import { InscriptionsService } from './inscriptions.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Inscription]),
    CoursesModule,
    EnrollmentsModule,
  ],
  controllers: [InscriptionsController],
  providers: [InscriptionsService],
  exports: [InscriptionsService],
})
export class InscriptionsModule {}
