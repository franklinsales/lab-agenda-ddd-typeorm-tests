// modules/users/infrastructure/typeorm/mappers/UserMapper.ts
import { User } from '@/modules/users/domain/entities/User';
import { UserEntity } from '../entities/UserEntity';

// This class is responsible for mapping between the User domain entity and the UserEntity persistence entity.
// It converts the UserEntity from the database to the User domain entity and vice versa.
// This is useful for separating the domain logic from the persistence logic, allowing for better maintainability and testability.
// The UserMapper class is a static class, meaning it cannot be instantiated and all its methods are static.
// This is a common pattern in TypeScript and JavaScript for utility classes that provide functionality without needing to create an instance.
export class UserMapper {

  static toDomain(entity: UserEntity): User {
    return new User(entity.id, entity.name, entity.email, entity.role as 'client' | 'provider');
  }

  static toPersistence(user: User): UserEntity {
    const entity = new UserEntity();
    entity.id = user.id;
    entity.name = user.name;
    entity.email = user.email;
    entity.role = user.role;
    return entity;
  }
}
