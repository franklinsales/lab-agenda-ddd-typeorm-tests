import { CreateUserUseCase } from '@/modules/users/application/use-cases/CreateUserUseCase';
import { Request, Response } from 'express';

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {

      const { name, email } = req.body;
      const user = await this.createUserUseCase.execute({
        name,
        email,
      });

      return res.status(201).json({
        id: user.getId(),
        name: user.name,
        email: user.email.getValue(),
        role: user.role,
      });

    } catch (error) {
      console.error(error);
      return res.status(400).json({
        message: "Error creating user",
      });
    }
  }
}