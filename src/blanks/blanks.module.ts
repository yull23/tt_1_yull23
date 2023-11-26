import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlanksController } from './blanks.controller';
import { BlanksService } from './blanks.service';
import { Blank } from './entities/blank.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blank])],
  controllers: [BlanksController],
  providers: [BlanksService],
  exports: [BlanksService, TypeOrmModule],
})
export class BlanksModule {}
