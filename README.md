# NUST 8th Programming Competition

---

Find the instructions on building the frontend and backend in the respective README files

It is recommended to download [Fork]() for easier collaboration

## Project Setup

---

### System Requirements

NodeJS - v18.16.0 or above
MongoDB Compass - For viewing the database

### Installation

Clone the repository

```bash
    git clone https://github.com/Big-Veikko/programming-competition.git
```

Install the dependencies for the frontend and backend

``` bash
    cd frontend
    npm install
    cd ../backend
    npm install
```

Run the backend server

First create a .env file in the root directory of the backend folder and paste the credentials sent to you in the secrets.txt file

Then you will have to generate the prisma client by running the following command

```bash
    cd backend
    npx prisma generate
```

After generating the prisma client you will have to push the database changes by running the following command

```bash
    npx prisma db push
```

Then you can run the server

```bash
    cd backend
    npm run dev
```

Run the frontend server

```bash
    cd frontend
    npm run serve
```

For any issues contact Sakaria on WhatsApp
