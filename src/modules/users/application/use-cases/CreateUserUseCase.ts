// src/modules/users/application/use-cases/CreateUserUseCase.ts
import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { Email } from "../../domain/value-objects/Email";
import ICreateUserDTO from "../dtos/ICreateUser.dto";

export class CreateUserUseCase {
  constructor (private userRepository: IUserRepository) {}

  // This method is responsible for creating a new user.
  // It returns a Promise that resolves to the created User.
  // The User returned is a domain entity, not a persistence entity, but it will have the ID set.
  async execute(data: ICreateUserDTO) : Promise<User> {
    const email = new Email(data.email);
    const user = User.createNew(
      data.name,
      email,
      'client', // Default role
    );
    const createdUser = await this.userRepository.createUser(user);
    return createdUser;
  }
}
