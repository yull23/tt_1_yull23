import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1701279459507 implements MigrationInterface {
  name = 'CreateUsers1701279459507';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Blanks
    await queryRunner.query(
      `CREATE TABLE "blank" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "last_name" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_5f8e6386245c3b754255a2dce59" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'student', 'teacher')`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'student', "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    await queryRunner.query(`DROP TABLE "blank"`);
  }
}
