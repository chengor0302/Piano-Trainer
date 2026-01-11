import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, AllowNull } from "sequelize-typescript";

@Table({ tableName: "users" })
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  nickname!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  avatarUrl?: string;
}
