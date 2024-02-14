import { Column, Entity, OneToMany, PrimaryGeneratedColumn,CreateDateColumn,
  UpdateDateColumn } from "typeorm";
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
  phone?: Number;
  
  @Column()
  birthday?: Date;
  
  @Column()
  password!: string;
  
  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
  
  @Column()
  active?: Number;

  @OneToMany(() => Appointment, appointment => appointment.user)
  appointments?: Appointment[];
}

