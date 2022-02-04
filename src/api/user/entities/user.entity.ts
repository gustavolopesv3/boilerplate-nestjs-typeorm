import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
    name: 'username',
  })
  userName: string;

  @Column({
    type: 'boolean',
    name: 'is_active',
  })
  isActive: boolean;

  @Column({
    type: 'varchar',
  })
  email: string;
}
