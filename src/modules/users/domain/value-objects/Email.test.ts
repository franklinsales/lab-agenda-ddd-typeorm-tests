import { Email } from './Email';

describe('Email Value Object', () => { // Test suite for the Email value object
  it('should create a valid email', () => { // Test case for creating a valid email
    const email = new Email('Test@Example.com'); // Create a new Email object with a valid email address
    expect(email.getValue()).toBe('test@example.com'); // Check if the email value is stored in lowercase
  });

  it('should throw an error for invalid email', () => { // Test case
    expect(() => new Email('invalid-email')).toThrow('Invalid email address'); // Check if an error is thrown for an invalid email address
  });

  it('should compare two equal emails as equal', () => {
    const email1 = new Email('test@example.com');
    const email2 = new Email('TEST@EXAMPLE.COM');
    expect(email1.equals(email2)).toBe(true);
  });

  it('should compare two different emails as not equal', () => {
    const email1 = new Email('user1@example.com');
    const email2 = new Email('user2@example.com');
    expect(email1.equals(email2)).toBe(false);
  });

  it('should validate email format statically', () => {
    expect(Email.isValid('valid@email.com')).toBe(true);
    expect(Email.isValid('invalid-email')).toBe(false);
  });
});
