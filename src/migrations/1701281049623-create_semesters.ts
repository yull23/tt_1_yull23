import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSemesters1701281049623 implements MigrationInterface {
    name = 'CreateSemesters1701281049623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "semester" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "UQ_005dac5aaf4ebe32e5cfdbe20eb" UNIQUE ("name"), CONSTRAINT "PK_9129c1fd35aa4aded7a9825b38d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "semester"`);
    }

}
