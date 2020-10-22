import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Integrations {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  users: string[];
}
