import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("users")
export class UserEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  role!: string;
}