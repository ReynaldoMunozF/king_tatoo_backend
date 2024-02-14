import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateShedules1707904513286 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "schedules",
            columns: [
              {
                name: "id",
                type: "int",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment",
              },
             
              {
                name: "tattoo_artist_id",
                type: "int",
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
        await queryRunner.dropTable("schedules");
      }
    }
    