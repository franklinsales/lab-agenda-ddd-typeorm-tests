import { DataSource } from 'typeorm';
import { UserEntity } from '@/modules/users/infrastructure/typeorm/entities/UserEntity';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: ':memory:',
  synchronize: true,
  entities: [UserEntity],
})

export default AppDataSource;