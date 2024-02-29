import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAppointments1704814259642 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "appointments",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "user_id",
            type: "int",
          },
          {
            name: "tattoo_artist_id",
            type: "int",
          },
          {
            name: "schedules_id",
            type: "int",
            isNullable:true,
          },
          {
            name: "appointment_date",
            type: "date",
           
          },

          {
            name: "hour",
            type: "varchar",
            length: "255",
          },

          {
            name: "active",
            type: "Tinyint",
            default: 1,
            length: "1",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
          {
            columnNames: ["tattoo_artist_id"],
            referencedTableName: "tattoo_artists",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
         
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("appointments");
  }
}
