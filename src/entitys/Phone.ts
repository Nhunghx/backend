import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Phone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  price: number;

  @Column()
  image_url: string;

  @Column()
  description: string;
}
