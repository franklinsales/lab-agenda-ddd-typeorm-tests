// src/modules/users/domain/entities/User.ts
import { Email } from "../value-objects/Email";

export class User { // This class represents a user entity
  private constructor(
    public name: string,
    public email: Email, // This is a value object representing the user's email
    public role: 'client' | 'provider',
  ) {
    // Common validations for all constructors
    if (!name || !email) {
      throw new Error('Invalid user data');
    }
  }

  private id?: number; // Optional property for the user's ID

  public setId(id: number): void {
    // This method is used to set the ID of the user.
    // It is a public method, meaning it can be accessed from outside the class.
    // It takes an id as a parameter and sets the id property of the User instance.
    // This is a common pattern in TypeScript to provide setter methods for private properties.
    // It allows for encapsulation and control over how the property is set.
    this.id = id;
  }
  public getId(): number | undefined {
    // This method is used to get the ID of the user.
    // It is a public method, meaning it can be accessed from outside the class.
    // It returns the ID if it is set, otherwise it returns undefined.
    // This is a common pattern in TypeScript to provide read-only access to private properties.
    return this.id;
  }

  static create(
    name: string,
    email: Email,
    role: 'client' | 'provider',
  ): User {
    // This method is used to create a new User instance.
    // It takes an id, name, email, and role as parameters and returns a new User instance.
    // The id is not used in the constructor but can be used for other purposes (e.g., logging).
    return new User(name, email, role);
  }

  static createNew(name: string, emailValueObject: Email, role: 'client' | 'provider'): User {
    return new User(name, emailValueObject, role);
  }
}