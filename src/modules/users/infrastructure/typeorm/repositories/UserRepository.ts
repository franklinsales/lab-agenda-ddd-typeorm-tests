// src/modules/users/infrastructure/typeorm/repositories/UserRepository.ts
import { IUserRepository } from "@/modules/users/domain/repositories/IUserRepository";
import { UserEntity } from "../entities/UserEntity";
import { DataSource, Repository } from "typeorm";
import { UserMapper } from "../mappers/UserMapper";
import { User } from "@/modules/users/domain/entities/User";

// This class is responsible for interacting with the database to perform CRUD operations on User entities.
// It uses TypeORM's Repository pattern to perform these operations.
// It implements the IUserRepository interface, which defines the methods that can be used to interact with User entities.
export class UserRepository implements IUserRepository {
  private ormRepository: Repository<UserEntity>;

  // The constructor takes a DataSource (which is a TypeORM class that represents a connection to the database) as a parameter.
  // It uses this DataSource to get a repository for the UserEntity.
  // The repository is used to perform CRUD operations on UserEntity objects.
  constructor(private dataSource: DataSource) {
    this.ormRepository = this.dataSource.getRepository(UserEntity);
  }

  // This method is responsible for creating a new user in the database.
  // It takes a User (which is a domain entity) as a parameter and returns a Promise that resolves to the created User.
  // The method first maps the User domain entity to a UserEntity (which is a persistence entity) using the UserMapper.
  // The UserMapper is a utility class that converts between the domain entity and the persistence entity.
  async createUser(user: User): Promise<User> {
    const userEntity = UserMapper.toPersistence(user);
    const saved = await this.ormRepository.save(userEntity);
    return UserMapper.toDomain(saved);
  }
}

