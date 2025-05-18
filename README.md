# Lab Agenda DDD TypeORM Tests

This project is a practical study of **Domain-Driven Design (DDD)** and **SOLID** principles using **TypeScript**, **TypeORM**, and **Express**. It simulates a service scheduling system, with a layered architecture and clear separation between domain, application, infrastructure, and interfaces.

## 🚀 Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html) (in-memory database for tests)
- [Jest](https://jestjs.io/) + [ts-jest](https://kulshekhar.github.io/ts-jest/) (unit tests)
- [Supertest](https://github.com/ladjs/supertest) (HTTP integration tests)

## 📦 Scripts

- `npm run build` — Compiles the TypeScript project to the `dist/` folder
- `npm run start` — Runs the compiled project
- `npm run dev` — Compiles and runs the project
- `npm run test` — Runs all tests with Jest

## 🗂️ Project Structure

The project follows the recommended structure for DDD, with separate modules for each domain context:

- **domain/**: Entities, Value Objects, Repository interfaces
- **application/**: Use Cases, DTOs
- **infrastructure/**: Repository implementations, mappers, ORM entities
- **interface/**: HTTP Controllers, input/output DTOs
- **shared/**: Shared infrastructure and utilities
- **test/**: Test setup and mocks

## 📖 Documentation

- [DEVLOG.md](DEVLOG.md): Detailed development changelog, architectural decisions, and implementation history.
- [doc/](doc/): Domain documentation, use cases, glossary, and project structure.

## 🧪 Tests

The project includes unit and integration tests. To run all tests:

```sh
npm run test
```