//src/modules/users/domain/value-objects/Email.ts
export class Email {

  // This is a private property that holds the value of the email address.
  // It is marked as readonly, meaning it can only be set once, either during construction or through a setter method.
  // This is a common pattern in TypeScript to enforce immutability.
  private readonly value: string;

  constructor(email: string) {
    if(!Email.isValid(email)) {
      throw new Error('Invalid email address');
    }
    this.value = email.toLowerCase().trim();
  }

  // This method is used to get the value(email address) of the Email object.
  // It is a public method, meaning it can be accessed from outside the class.
  // This is a common pattern in TypeScript to provide read-only access to private properties.
  public getValue(): string {
    return this.value;
  }

  // This method is used to check if the current email address is equal to another email address.
  // It takes another Email object as a parameter and compares the values of both email addresses.
  // This is a common pattern in TypeScript to provide equality checks for value objects.
  public equals(other: Email): boolean {
    return this.value === other.getValue();
  }

  // This is a static method that checks if the provided email address is valid.
  // It uses a regular expression to validate the email format.
  // This is a common pattern in TypeScript to provide utility methods that do not depend on instance properties.
  public static isValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.toLowerCase().trim());
  }
}