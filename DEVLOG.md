# Devlog
## Here, I will document the actions and decisions taken during the development process. It's like a changelog, but for the development process.

**>> Insert New Log Here <<**

## Wed 14 May 2025

First init npm with default settings:  
`npm init -y`

Install the dependencies
`npm install reflect-metadata sqlite3 typeorm express`

Install the DEV dependencies
`npm install -D typescript`

Init Typescript Cofing File
`npx tsc --init`

Update few tsconfig.json settings:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
    //...
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

Add scripts to package.json:
"build": "tsc",
"start": "node dist/index.js",
"dev": "tsc && node dist/index.js",

#### Coding

I created the src/ directory, where the application will be placed.

To develop the project, I will use DDD as a software design approach and SOLID principles as good software development practices.
So, using DDD, the application will be split into individual modules.

For now, I believe I will have the following modules:
- users
- professionals
- services
- availability
- appointments

The first thing to do is create the pure domain entities first - not TypeORM or any other ORM.
**It's necessary to keep the domain independent of infrastructure.**

The User pure Entity `src/modules/users/domain/entities/User.ts` was created.

After the in the infrastructure layer was created the UserEntity `src/modules/users/infrastructure/typeorm/entities/UserEntity.ts` entity typeorm.

But to unify these two layers is necessary to use the Data Mapper Pattern:
[Data Mapper Pattern](https://martinfowler.com/eaaCatalog/dataMapper.html)

"A layer of mappers that moves data between objects and a database while keeping them independent of each other and the mapper itself." - Martin Fowler

Objects and databases have different mechanisms for structuring and handling data, so for your system not to become a tightly coupled system, you need to isolate the Domain Entity from your Infrastructure Entity
and use the Data Mapper Pattern to connect both in your application.

Here we have our first Data Mapper implementation connecting User (Domain) and UserEntity`src/modules/users/infrastructure/typeorm/mappers/UserMapper.ts`

## Wed 15 May 2025

The Value-Object Email was created `src/modules/users/domain/value-objects/Email.ts`

A Value-Object is a Pattern particulary within context of Domain-Driven Design (DDD).
[Value Object](https://martinfowler.com/bliki/ValueObject.html)