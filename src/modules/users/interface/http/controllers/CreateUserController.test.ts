import request from 'supertest';
import { setupTestServer } from '@/test/setupTestServer';

describe('CreateUserController', () => {

  it('should create a a user and return 201', async () => {
    const app = await setupTestServer()

    const response = await request(app).post('/users').send({
      name: 'Test User',
      email: 'test@example.com'
    });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Test User');
    expect(response.body.email).toBe('test@example.com');
    expect(response.body.id).toBeDefined();
  })

})