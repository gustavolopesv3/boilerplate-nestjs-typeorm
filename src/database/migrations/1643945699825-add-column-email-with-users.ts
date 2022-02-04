import { MigrationInterface, QueryRunner } from 'typeorm';

export class addColumnEmailWithUsers1643945699825
  implements MigrationInterface
{
  name = 'addColumnEmailWithUsers1643945699825';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "email" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
  }
}
