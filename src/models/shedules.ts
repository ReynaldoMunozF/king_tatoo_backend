import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  import { Tattoo_artist} from "./tatoo_artist";
  
  @Entity("schedules")
  export class Schedules extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    tattoo_artist_id!: number;
  
    @Column()
    appointment_date!: Date;
    
    @Column()
    hour!: string
  
    @Column()
    active?: Number;
  
    @ManyToOne(() => Tattoo_artist, (tattoo_artist) => tattoo_artist.appointments)
    @JoinColumn({ name: "tattoo_artist_id" })
    tattoo_artist!: Tattoo_artist;
  }
  