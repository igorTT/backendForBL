import { Column, Entity, ObjectIdColumn, Unique } from 'typeorm';

@Entity()
@Unique(['email'])
export class User {
  @ObjectIdColumn()
  _id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber?: string;

  @Column()
  location?: string;

  @Column()
  jobTitle?: string;

  @Column()
  integrations: string[];
}
