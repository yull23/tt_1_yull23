import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStudents1701280205807 implements MigrationInterface {
    name = 'CreateStudents1701280205807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "student_code" character varying NOT NULL, "user_id" uuid, CONSTRAINT "UQ_6b904603cbf51e5aeeac832f0cc" UNIQUE ("student_code"), CONSTRAINT "REL_0cc43638ebcf41dfab27e62dc0" UNIQUE ("user_id"), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_0cc43638ebcf41dfab27e62dc09" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_0cc43638ebcf41dfab27e62dc09"`);
        await queryRunner.query(`DROP TABLE "student"`);
    }

}
