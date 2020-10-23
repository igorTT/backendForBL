import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class UserGql {
  @ObjectIdColumn()
  _id: string;

  @Column()
  username: string;

  @Column()
  email: string;
}
