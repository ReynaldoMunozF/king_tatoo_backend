import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "./Appointment";


@Entity("users")
export class User{
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  username!: string;

  @Column()
  first_name!: string;
  
  @Column()
  last_name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
  
  @Column()
  active?: Number;

  @OneToMany(() => Appointment, appointment => appointment.user)
  appointments?: Appointment[];
}