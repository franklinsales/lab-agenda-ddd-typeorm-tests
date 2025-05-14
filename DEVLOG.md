# Devlog
## Here, I will document the actions and decisions taken during the development process. It's like a changelog, but for the development process.

**>> Insert New Log Here <<**

### Wed 14 May 2025

First init npm with default settings:  
`npm init -y`

Install the dependencies
`npm install reflect-metadata sqlite3 typeorm express`

Install the DEV dependencies
`npm install -D typescript`

Init Typescript Cofing File
`npx tsc --init`

Update few tsconfig.json settings:
compilerOptions{
  ...
  "target": "ES2020",
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true,
},
"include": ["src"],
"exclude": ["node_modules", "dist"]

Add scripts to package.json:
"build": "tsc",
"start": "node dist/index.js",
"dev": "tsc && node dist/index.js",