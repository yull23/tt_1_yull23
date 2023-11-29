import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCourses1701280699618 implements MigrationInterface {
    name = 'CreateCourses1701280699618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "course" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "credits" integer NOT NULL, "course_code" character varying NOT NULL, "teacher_id" uuid, CONSTRAINT "UQ_30d559218724a6d6e0cc4f26b0e" UNIQUE ("name"), CONSTRAINT "UQ_e3a6d871e7e62c5cf609e892e7c" UNIQUE ("course_code"), CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "FK_f4acb7f54962af04a558b1a5ed9" FOREIGN KEY ("teacher_id") REFERENCES "teacher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "FK_f4acb7f54962af04a558b1a5ed9"`);
        await queryRunner.query(`DROP TABLE "course"`);
    }

}
