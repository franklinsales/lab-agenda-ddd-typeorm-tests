// src/modules/users/domain/repositories/IUserRepository.ts
import { User } from "../entities/User";

interface IUserRepository {
  createUser(user: User): Promise<User>;
}

export { IUserRepository };