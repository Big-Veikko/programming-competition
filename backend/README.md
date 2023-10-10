# Express Backend

---

The backend is build using Express JS, with TypeScript for safety, and connects to MongoDB

Prisma is used as the ORM for the project

[Click here](https://www.prisma.io/docs/guides) for a guide on using prisma

Please write all functionality in TypeScript, meaning the file extension must be .ts and not .js

The source code is contained with the 'src' directory and the prisma client can be found in the 'prisma' directory

This application uses the Model-View-Controller(MVC) architecture

However, views are handled in the frontend and not the backend

The Express server is used to build the APIs that are consumed in the frontend

In 'src', there are the following directories

database

- Used to initialise the Prisma Client for connecting to the database

middleware

- Used to write any middleware that is needed in the application

todos

- An example API that handles CRUD functionality for Todo items

## API

The various API endpoints for the various models for our database will use the structure in 'todo'

controller.ts

- This is where the logic for various HTTP methods will be written

- Looking at each function, the name should describe what it is doing and within the function, you write the functionality for what happens when that method is called

route.ts

- This is where the various endpoints for our functions will be placed

- Notice the naming schema for the endpoint

- It is '/model_name' where model_name should be the endpoint name for the particular endpoint you are writing

  - Example

    - If you're working on the users endpoint, use the schema '/users'

index.ts

- This is where the routes are exported to be used in the main app.ts file for allowing access to that endpoint

## Main App File

---

The main app file is in 'src' and is named 'app.ts'

This is the configuration for the Express server and where all API endpoints are joined

When adding the endpoint for the APIs, use the Todo example provided

Prefix all entries with the '/api' keyword as that is the selected schema
