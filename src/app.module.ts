import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlanksModule } from './blanks/blanks.module';
import { Blank } from './blanks/entities/blank.entity';
import { DataSourceConfig } from './config/data.source';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({ ...DataSourceConfig, entities: [Blank] }),
    BlanksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
