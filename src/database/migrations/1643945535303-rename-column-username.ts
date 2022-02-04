import { MigrationInterface, QueryRunner } from 'typeorm';

export class renameColumnUsername1643945535303 implements MigrationInterface {
  name = 'renameColumnUsername1643945535303';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "user_name" TO "username"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" RENAME CONSTRAINT "UQ_074a1f262efaca6aba16f7ed920" TO "UQ_fe0bb3f6520ee0469504521e710"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" TO "UQ_074a1f262efaca6aba16f7ed920"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "username" TO "user_name"`,
    );
  }
}
