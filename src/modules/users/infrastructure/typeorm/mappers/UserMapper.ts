// src/modules/users/infrastructure/typeorm/mappers/UserMapper.ts
import { User } from '@/modules/users/domain/entities/User';
import { UserEntity } from '../entities/UserEntity';
import { Email } from '@/modules/users/domain/value-objects/Email';

// This class is responsible for mapping between the User domain entity and the UserEntity persistence entity.
// It converts the UserEntity from the database to the User domain entity and vice versa.
// This is useful for separating the domain logic from the persistence logic, allowing for better maintainability and testability.
// The UserMapper class is a static class, meaning it cannot be instantiated and all its methods are static.
// This is a common pattern in TypeScript and JavaScript for utility classes that provide functionality without needing to create an instance.
export class UserMapper {

  static toDomain(entity: UserEntity): User {
    const emailValueObject = new Email(entity.email);
    const user = User.create(entity.name, emailValueObject, entity.role as 'client' | 'provider');
    user.setId(entity.id);
    return user;
  }

  static toPersistence(user: User): UserEntity {
    const emailValueObject = user.email;
    const userEntity = new UserEntity();

    const id = user.getId();
    if (id) {
      userEntity.id = id;
    }
    
    userEntity.name = user.name;
    userEntity.email = emailValueObject.getValue();
    userEntity.role = user.role;
    return userEntity;
  }
}
