import { MigrationInterface, QueryRunner } from 'typeorm';

export class chengeNameUser1652322871864 implements MigrationInterface {
  name = 'chengeNameUser1652322871864';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "full_name" TO "name"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "name" TO "full_name"`,
    );
  }
}
