import express from 'express';
import { CreateUserUseCase } from '@/modules/users/application/use-cases/CreateUserUseCase';
import { UserRepository } from '@/modules/users/infrastructure/typeorm/repositories/UserRepository';
import { CreateUserController } from '@/modules/users/interface/http/controllers/CreateUserController';
import AppDataSource from '@/shared/infra/typeorm/data-source';

export async function setupTestServer() {
  const app = express(); // Create an instance of express
  app.use(express.json()); // Middleware to parse JSON request bodies

    if (!AppDataSource.isInitialized) { // Check if the data source is not already initialized
      await AppDataSource.initialize();
    }

  // Initialize the UserRepository
  const userRepository = new UserRepository(AppDataSource);

  // Initialize the CreateUserUseCase and CreateUserController
  const createUserUseCase = new CreateUserUseCase(userRepository);

  // Create an instance of CreateUserController with the use case
  const createUserController = new CreateUserController(createUserUseCase);

  app.post('/users', async (req, res) => { // Route to handle user creation
    await createUserController.handle(req, res);
  }); // Route to create a user

  return app; // Export the express app instance
}