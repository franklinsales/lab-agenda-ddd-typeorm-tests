// src/modules/users/application/use-cases/CreateUserUseCase.test.ts
import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories/IUserRepository"
import { Email } from "../../domain/value-objects/Email";
import { CreateUserUseCase } from "./CreateUserUseCase";

// Initial setup for the test suite
describe('CreateUserUseCase', () => { // Test suite for CreateUserUseCase
  let mockRepository: IUserRepository; // Here we define a variable for the mock repository. This will be use to simulate the behavior of the actual repository in our tests.
  let createUserUseCase: CreateUserUseCase;

  // Define a beforeEach function to set up the test environment before each test case
  beforeEach(() => {
    mockRepository = {
      createUser: jest.fn()
    }; // Here we create a mock repository using Jest's mocking functions. The createUser method is mocked to simulate its behavior.
    createUserUseCase = new CreateUserUseCase(mockRepository); // Here we create an instance of CreateUserUseCase, passing the mock repository as a dependency.
  });

  it ('should create a user with valid data', async () => {
    const mockInput = {
      name: 'John Doe',
      email: 'john@example.com',
    }; // Here we define a mock input object that represents the data we want to use to create a user. This data is valid and should be accepted by the use case.

    const emailValueObject = new Email(mockInput.email);
    const createdUser = User.create(mockInput.name, emailValueObject, 'provider'); // Here we create an instance of the User entity.

    (mockRepository.createUser as jest.Mock).mockResolvedValue(createdUser); // Here we mock the behavior of the createUser method in the repository to return the created user when called.
    const result = await createUserUseCase.execute(mockInput);

    expect(mockRepository.createUser).toHaveBeenCalledTimes(1); // Here we assert that the createUser method in the repository was called exactly once.
    expect(result).toBeInstanceOf(User); // Here we assert that the result of the use case is an instance of the User entity.
    expect(result.name).toBe('John Doe'); // Here we assert that the name of the created
    expect(result.email.getValue()).toBe('john@example.com'); // Here we assert that the email of the created user is the same as the one we provided in the input.
    expect(result.role).toBe('provider'); // Here we assert that the role of the created user is 'provider'.
  });

  it('should throw an error if the email is invalid', async () => {
    const mockInput = {
      name: 'John Doe',
      email: 'invalid-email',
    }; // Here we define a mock input object with an invalid email address.

    await expect(createUserUseCase.execute(mockInput)).rejects.toThrow('Invalid email'); // Here we assert that the use case throws an error when called with invalid data.
    expect(mockRepository.createUser).not.toHaveBeenCalled(); // Here we assert that the createUser method in the repository was not called.
  });

});
