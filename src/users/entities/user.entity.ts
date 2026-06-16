import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
<<<<<<< HEAD
  username: string = ''

  @Column()
  email: string = ''
=======
  username: string = '';

  @Column()
  email: string = '';
>>>>>>> main
}
