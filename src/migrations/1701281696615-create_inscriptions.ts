import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInscriptions1701281696615 implements MigrationInterface {
    name = 'CreateInscriptions1701281696615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher" DROP CONSTRAINT "FK_93f6fa64874b010c5f3a87c3b8b"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_0cc43638ebcf41dfab27e62dc09"`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'student', 'teacher')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL DEFAULT 'student', "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "teacher" ADD CONSTRAINT "FK_93f6fa64874b010c5f3a87c3b8b" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_0cc43638ebcf41dfab27e62dc09" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_0cc43638ebcf41dfab27e62dc09"`);
        await queryRunner.query(`ALTER TABLE "teacher" DROP CONSTRAINT "FK_93f6fa64874b010c5f3a87c3b8b"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_0cc43638ebcf41dfab27e62dc09" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teacher" ADD CONSTRAINT "FK_93f6fa64874b010c5f3a87c3b8b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
