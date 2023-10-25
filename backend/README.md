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

## Endpoints

The endpoints for the various models are as follows

### Alumni

/alumni

Method: GET

Description: Get all the alumni details

Expected Output

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "university": "NUST",
    "degree": "Bachelors",
    "major": "Computer Science",
    "graduation": "2019",
    "employment_status": "Employed"
  }
]
```

/alumni/:id

Method: GET

Description: Get the details of a particular alumni

Expected Output

```json
{
  "name": "John Doe",
  "university": "NUST",
  "degree": "Bachelors",
  "major": "Computer Science",
  "graduation": "2019",
  "employment_status": "Employed",
  "employment_history": [
    {
      "company": "Google",
      "position": "Software Engineer",
      "start_date": "2019",
      "end_date": "2020",
      "description": "Worked on the Google Search Engine"
    },
    {
      "company": "Facebook",
      "position": "Software Engineer",
      "start_date": "2020",
      "end_date": "2021",
      "description": "Worked on the Facebook News Feed"
    },
    {
      "company": "Amazon",
      "position": "Software Engineer",
      "start_date": "2021",
      "end_date": "2022",
      "description": "Worked on the Amazon Search Engine"
    },
    {
      "company": "Microsoft",
      "position": "Software Engineer",
      "start_date": "2022",
      "end_date": "Present",
      "description": "Worked on the Microsoft Search Engine"
    }
  ]
}
```

/alumni

Method: POST

Description: Create a new alumni

Expected Output

```json
{
  "status": 201
}
```

/alumni/:id

Method: PUT

Description: Update the details of a particular alumni

Expected Output

```json
{
  "status": 200
}
```

/alumni/:id

Method: DELETE

Description: Delete the details of a particular alumni

Expected Output

```json
{
  "status": 200
}
```

### Auth

/auth

Method: POST

Description: Login a user

Expected Output

```json
{
  "status": 200,
  "data": {
    "id": "id",
    "email": "",
    "user_type": "admin",
    "status": "active"
  },
  "token": {
    "access": "access_token",
    "refresh": "refresh_token",
    "expires_in": "expires_in"
  }
}
```

/auth

Method: PUT

Description: Update the details of the currently logged in user

Expected Output

```json
{
  "status": 200,
  "data": {
    "id": "id",
    "email": "",
    "user_type": "admin",
    "status": "active"
  }
}
```

/auth

Method: DELETE

Description: Delete the details of the currently logged in user

Expected Output

```json
{
  "status": 204,
  "message": "User deleted successfully"
}
```

### Blog

/blog

Method: GET

Description: Get all the blog posts

Expected Output

```json
[
  {
    "id": 1,
    "author": "John Doe",
    "title": "The 5th Wave",
    "post_date": "2016-01-22",
    "thumbnail": "http://www.movieposter.com/posters/archive/main/217/MPW-108532",
    "engagement": {
      "likes": 100,
      "comments": 50,
      "shares": 20
    }
  }
]
```

/blog/:id

Method: GET

Description: Get the details of a particular blog post

Expected Output

```json
{
  "id": 1,

  "title": "The 5th Wave",
  "post_date": "2016-01-22",
  "thumbnail": "http://www.movieposter.com/posters/archive/main/217/MPW-108532",
  "engagement": {
    "likes": 100,
    "comments": 50,
    "shares": 20
  },
  "content": "Four waves of increasingly deadly alien attacks have left most of Earth decimated. Cassie is on the run, desperately trying to save her younger brother.",
  "comments": [
    {
      "username": "user1",
      "comment": "This is a comment"
    },
    {
      "username": "user2",
      "comment": "This is another comment"
    }
  ]
}
```

/blog

Method: POST

Description: Create a new blog post

Expected Output

```json
{
  "status": 201
}
```

/blog/:id

Method: PUT

Description: Update the details of a particular blog post

Expected Output

```json
{
  "status": 200
}
```

/blog/:id

Method: DELETE

Description: Delete the details of a particular blog post

Expected Output

```json
{
  "status": 200
}
```

### Event

/event

Method: GET

Description: Get all the events

Expected Output

```json
[
  {
    "id": 1,
    "subject": "The 5th Wave",
    "dtstart": "20231111T150000",
    "dtend": "20231111T160000",
    "type": "meeting",
    "thumbnail": "http://www.movieposter.com/posters/archive/main/217/",
    "organizer": "John Doe",
    "description": "Four waves of increasingly deadly alien attacks have left most of Earth decimated. Cassie is on the run, desperately trying to save her younger brother."
  }
]
```

/event/:id

Method: GET

Description: Get the details of a particular event

Expected Output

```json
{
  "id": 1,
  "subject": "The 5th Wave",
  "dtstart": "20231111T150000",
  "dtend": "20231111T160000",
  "type": "meeting",
  "thumbnail": "http://www.movieposter.com/posters/archive/main/217/",
  "organizer": "John Doe",
  "description": "Four waves of increasingly deadly alien attacks have left most of Earth decimated. Cassie is on the run, desperately trying to save her younger brother."
}
```

/event

Method: POST

Description: Create a new event

Expected Output

```json
{
  "status": 201
}
```

/event/:id

Method: PUT

Description: Update the details of a particular event

Expected Output

```json
{
  "status": 200
}
```

/event/:id

Method: DELETE

Description: Delete the details of a particular event

Expected Output

```json
{
  "status": 200
}
```

/event/attend/:id

Method: POST

Description: Attend an event

Expected Output

```json
{
  "status": 200
}
```

/event/attend/:id

Method: DELETE

Description: Unattend an event

Expected Output

```json
{
  "status": 200
}
```

/event/approve/:id

Method: PUT

Description: Approve an event

Expected Output

```json
{
  "status": 200
}
```

### Feedback

/feedback

Method: GET

Description: Get all the feedbacks

Expected Output

```json
[
  {
    "id": 1,
    "title": "The 5th Wave",
    "post_date": "2016-01-22",
    "summary": "Four waves of increasingly deadly alien attacks have left most of Earth decimated. Cassie is on the run, desperately trying to save her younger brother.",
    "author": {
      "name": "Name",
      "email": "email"
    }
  }
]
```

/feedback/:id

Method: GET

Description: Get the details of a particular feedback

Expected Output

```json
{
  "id": 1,
  "title": "The 5th Wave",
  "post_date": "2016-01-22",
  "summary": "Four waves of increasingly deadly alien attacks have left most of Earth decimated. Cassie is on the run, desperately trying to save her younger brother.",
  "author": {
    "name": "Name",
    "email": "email"
  }
}
```

/feedback

Method: POST

Description: Create a new feedback

Expected Output

```json
{
  "status": 201
}
```

/feedback/:id

Method: PUT

Description: Update the details of a particular feedback

Expected Output

```json
{
  "status": 200
}
```

/feedback/:id

Method: DELETE

Description: Delete the details of a particular feedback

Expected Output

```json
{
  "status": 200
}
```

### Fundrasier

/fundraiser

Method: GET

Description: Get all the fundraisers

Expected Output

```json
[
  {
    "id": 1,
    "event_details": {},
    "target": 1000,
    "raised": 500,
    "cause": "Cause",
    "approval_status": "approved",
    "target_status": "pending"
  }
]
```

/fundraiser/:id

Method: GET

Description: Get the details of a particular fundraiser

Expected Output

```json
{
  "id": 1,
  "event_details": {},
  "target": 1000,
  "raised": 500,
  "cause": "Cause",
  "approval_status": "approved",
  "target_status": "pending"
}
```

/fundraiser

Method: POST

Description: Create a new fundraiser

Expected Output

```json
{
  "status": 201
}
```

/fundraiser/:id

Method: PUT

Description: Update the details of a particular fundraiser

Expected Output

```json
{
  "status": 200
}
```

/fundraiser/:id

Method: DELETE

Description: Delete the details of a particular fundraiser

Expected Output

```json
{
  "status": 200
}
```

/fundraiser/approve/:id

Method: PUT

Description: Approve a fundraiser

Expected Output

```json
{
  "status": 200
}
```

### Group

/group

Method: GET

Description: Get all the groups

Expected Output

```json
[
  {
    "id": 1,
    "name": "Group Name",
    "description": "Group Description"
  }
]
```

/group/:id

Method: GET

Description: Get the details of a particular group

Expected Output

```json
{
  "id": 1,
  "name": "Group Name",
  "description": "Group Description",
  "owner": "id of the group creator",
  "members": [
    {
      "id": "Member ID",
      "name": "Member Name",
      "title": "Member Title",
      "email_address": "Member Email Address",
      "phone_number": "Member Phone Number"
    }
  ],
  "events": [
    {
      "id": "Event ID",
      "subject": "Event Subject",
      "dtstart": "Event Start Date",
      "dtend": "Event End Date",
      "type": "Event Type",
      "thumbnail": "Event Thumbnail",
      "organizer": "Event Organizer",
      "description": "Event Description"
    }
  ]
}
```

/group

Method: POST

Description: Create a new group

Expected Output

```json
{
  "status": 201
}
```

/group/:id

Method: PUT

Description: Update the details of a particular group

Expected Output

```json
{
  "status": 200
}
```

/group/:id

Method: DELETE

Description: Delete the details of a particular group

Expected Output

```json
{
  "status": 200
}
```

/group/:id/member

Method: POST

Description: Add a member to a group

Expected Output

```json
{
  "status": 200
}
```

/group/:id/member/:member_id

Method: DELETE

Description: Remove a member from a group

Expected Output

```json
{
  "status": 200
}
```

### News

/news

Method: GET

Description: Get all the news

Expected Output

```json
[
  {
    "id": 1,
    "title": "The 5th Wave",
    "post_date": "2016-01-22",
    "author": {
      "name": "Name",
      "email": "email"
    },
    "tags": ["tag1", "tag2"]
  }
]
```

/news/:id

Method: GET

Description: Get the details of a particular news

Expected Output

```json
{
  "id": 1,
  "title": "The 5th Wave",
  "post_date": "2016-01-22",
  "author": {
    "name": "Name",
    "email": "email"
  },
  "tags": ["tag1", "tag2"],
  "content": "Content"
}
```

/news

Method: POST

Description: Create a new news

Expected Output

```json
{
  "status": 201
}
```

/news/:id

Method: PUT

Description: Update the details of a particular news

Expected Output

```json
{
  "status": 200
}
```

/news/:id

Method: DELETE

Description: Delete the details of a particular news

Expected Output

```json
{
  "status": 200
}
```

### Opportunity

/opportunity

Method: GET

Description: Get all the opportunities

Expected Output

```json
[
  {
    "id": 1,
    "name": "Internship at CERN",
    "author": "CERN",
    "posted_date": "2019-01-01",
    "tags": ["CERN", "Internship", "Python", "Django", "Web Development"],
    "location": "Geneva, Switzerland",
    "duration": "6 months"
  }
]
```

/opportunity/:id

Method: GET

Description: Get the details of a particular opportunity

Expected Output

```json
{
  "id": 1,
  "name": "Internship at CERN",
  "author": "CERN",
  "posted_date": "2019-01-01",
  "description": "This is a description of the internship",
  "requirements": "This is a description of the requirements",
  "tags": ["CERN", "Internship", "Python", "Django", "Web Development"],
  "link": "https://careers.cern/job/12798",
  "location": "Geneva, Switzerland",
  "duration": "6 months",
  "salary": "CHF 3,319.00 per month",
  "application_deadline": "2019-01-31",
  "application_link": "https://careers.cern/job/12798",
  "contact": "exmaple@email.com"
}
```

/opportunity

Method: POST

Description: Create a new opportunity

Expected Output

```json
{
  "status": 201
}
```

/opportunity/:id

Method: PUT

Description: Update the details of a particular opportunity

Expected Output

```json
{
  "status": 200
}
```

/opportunity/:id

Method: DELETE

Description: Delete the details of a particular opportunity

Expected Output

```json
{
  "status": 200
}
```

### University

/university

Method: GET

Description: Get all the universities

Expected Output

```json
[
  {
    "id": 1,
    "name": "NUST",
    "website": "nust.na",
    "contact_email": "alumni@nust.na",
    "contact_phone": "+264 61 207 2056",
    "address": "13 Jackson Kaujeua Street, Windhoek, Namibia",
    "logo": "https://www.nust.na/images/logo.png",
    "social": {
      "facebook": "https://www.facebook.com/nust.na",
      "twitter": "https://twitter.com/nust_namibia",
      "linkedin": "https://www.linkedin.com/school/namibia-university-of-science-and-technology/",
      "instagram": "https://www.instagram.com/nust_namibia/",
      "youtube": "https://www.youtube.com/channel/UCZ1Q4Q8Z0Y5Y5qQ1Q5Z1Z0A"
    }
  }
]
```

/university/:id

Method: GET

Description: Get the details of a particular university

```json
{
  "name": "NUST",
  "website": "nust.na",
  "contact_email": "alumni@nust.na",
  "contact_phone": "+264 61 207 2056",
  "address": "13 Jackson Kaujeua Street, Windhoek, Namibia",
  "logo": "https://www.nust.na/images/logo.png",
  "social": {
    "facebook": "https://www.facebook.com/nust.na",
    "twitter": "https://twitter.com/nust_namibia",
    "linkedin": "https://www.linkedin.com/school/namibia-university-of-science-and-technology/",
    "instagram": "https://www.instagram.com/nust_namibia/",
    "youtube": "https://www.youtube.com/channel/UCZ1Q4Q8Z0Y5Y5qQ1Q5Z1Z0A"
  }
}
```

/university

Method: POST

Description: Create a new university

Expected Output

```json
{
  "status": 201
}
```

/university/:id

Method: PUT

Description: Update the details of a particular university

Expected Output

```json
{
  "status": 200
}
```

/university/:id

Method: DELETE

Description: Delete the details of a particular university

Expected Output

```json
{
  "status": 200
}
```

## Main App File

---

The main app file is in 'src' and is named 'app.ts'

This is the configuration for the Express server and where all API endpoints are joined

When adding the endpoint for the APIs, use the Todo example provided

Prefix all entries with the '/api' keyword as that is the selected schema
