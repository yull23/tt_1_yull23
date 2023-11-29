import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlanksModule } from './blanks/blanks.module';
import { Blank } from './blanks/entities/blank.entity';
import { DataSourceConfig } from './config/data.source';
import { HealthController } from './healt-check/health.controller';
import { UsersModule } from './users/users.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig, entities: [Blank] }),
    BlanksModule,
    UsersModule,
    TeachersModule,
    StudentsModule,
    // CacheModule.register({
    //   isGlobal: true,
    //   ttl: 5,
    //   max: 10,
    // }),
  ],
  controllers: [HealthController],
  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CacheInterceptor,
    // },
  ],
})
export class AppModule {}
