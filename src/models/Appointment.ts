import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Tattoo_artist } from "./tatoo_artist";

@Entity("appointments")
export class Appointment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user_id!: number;

  @Column()
  tattoo_artist_id!: number;

  @Column()
  appointment_date!: Date;
  
  @Column()
  hour!: string

  @Column()
  active?: Number;

  @ManyToOne(() => User, (user) => user.appointments)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @ManyToOne(() => Tattoo_artist, (tattoo_artist) => tattoo_artist.appointments)
  @JoinColumn({ name: "tattoo_artist_id" })
  tattoo_artist!: Tattoo_artist;
}
