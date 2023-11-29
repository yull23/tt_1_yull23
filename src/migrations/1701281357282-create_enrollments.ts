import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEnrollments1701281357282 implements MigrationInterface {
    name = 'CreateEnrollments1701281357282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "enrollment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "semester_id" uuid, "student_id" uuid, CONSTRAINT "PK_7e200c699fa93865cdcdd025885" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "enrollment" ADD CONSTRAINT "FK_26dfc1fdab4187684e5c495ec7d" FOREIGN KEY ("semester_id") REFERENCES "semester"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "enrollment" ADD CONSTRAINT "FK_eb0d79d7b8954d3129d032b0bb1" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "enrollment" DROP CONSTRAINT "FK_eb0d79d7b8954d3129d032b0bb1"`);
        await queryRunner.query(`ALTER TABLE "enrollment" DROP CONSTRAINT "FK_26dfc1fdab4187684e5c495ec7d"`);
        await queryRunner.query(`DROP TABLE "enrollment"`);
    }

}
