import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Appointment } from "./Appointment";

@Entity("tatoo_artists")
export class Tattoo_artist {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  nickname!: string;

  @Column()
  first_name!: string;
  
  @Column()
  last_name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

 @Column()
  active!: Number;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments?: Appointment[];
}
