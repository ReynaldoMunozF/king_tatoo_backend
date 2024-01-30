import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Tattoo_artist } from "./tatoo_artist";

@Entity("roles")
export class Role {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  role_name?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

 
}

