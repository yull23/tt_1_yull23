import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTeachers1701279871430 implements MigrationInterface {
    name = 'CreateTeachers1701279871430'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teacher" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "teacher_code" character varying NOT NULL, "user_id" uuid, CONSTRAINT "UQ_06f723f94d4e9933b0fb8328f92" UNIQUE ("teacher_code"), CONSTRAINT "REL_93f6fa64874b010c5f3a87c3b8" UNIQUE ("user_id"), CONSTRAINT "PK_2f807294148612a9751dacf1026" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "teacher" ADD CONSTRAINT "FK_93f6fa64874b010c5f3a87c3b8b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher" DROP CONSTRAINT "FK_93f6fa64874b010c5f3a87c3b8b"`);
        await queryRunner.query(`DROP TABLE "teacher"`);
    }

}
