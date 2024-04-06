# RESTful API for a Task Management System

## Introduction
A brief introduction of your project goes here. You may want to cover the purpose of your project, its core functionality, and what problems it solves.

## Project Type
Backend 

## Deplolyed App
Frontend: https://deployed-site.whatever<br/>
Backend: https://deployed-site.whatever<br/>
Database: https://deployed-site.whatever<br/>

## Directory Structure
task-management-system<br/>
├─ backend<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ config<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ db.js<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ middleware<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ auth.middleware.js<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ model<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ task.model.js<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ user.model.js<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ blacklist.model.js<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ routes<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ user.routes.js<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ task.routes.js<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ index.js<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ package.json<br/>

## Video Walkthrough of the project
Attach a very short video walkthough of all of the features [ 1 - 3 minutes ]

## Video Walkthrough of the codebase
Attach a very short video walkthough of codebase [ 1 - 5 minutes ]

## Features
List out the key features of your application.

- user authentication 
- manage task (CRUD)  

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

```bash
npm init task-management-system
cd init task-management-system
npm run server
```

## Usage
Instructions and examples on to use.

```bash
# Example
POST http://localhost:8080/
    {
        "msg": "wlcome"
    }
Register a user
POST http://localhost:8080/register
    {
     "username":"fluidai",
     "email":"fluidai@gmail.com",
     "password":"1234"
    }

Login
POST http://localhost:8080/login
    {
     "email":"fluidai@gmail.com",
     "password":"1234"
    }

Logout
GET http://localhost:8080/logout

Create Task
POST http://localhost:8080/task/create
    {
        "title":"work"
        "description":"home work"
        "dueDate":2024-12-01T18:30:00.000+00:00
        "priority":"low"/"medium"/"high"   
        "status":"done"
    }
Retrieve all task ( you need to login first to access this and while GET request you have to provide token )
GET http://localhost:8080/task/
    [
        {
            "_id": "6610352efe0cd5e737f45820",
            "title":"work",
            "description":"home work",
            "dueDate":2024-12-01T18:30:00.000+00:00,
            "priority":"low",
            "status":"done"
        },
        {
            "_id": "6610352efe0cd5e737f45820",
            "title":"office work",
            "description":"get details of employee",
            "dueDate":2024-12-01T18:30:00.000+00:00,
            "priority":"low",
            "status":"done"
        },
        {
            "_id": "6610352efe0cd5e737f45820",
            "title": "tommo",
            "description": "String",
            "dueDate": "2024-12-01T18:30:00.000Z",
            "priority": "low",
            "status": "done"
        }
    ]
Retrieve single task by id
GET http://localhost:8080/task/id
    {
        "_id": "6610352efe0cd5e737f45820",
        "title":"work",
        "description":"home work",
        "dueDate":2024-12-01T18:30:00.000+00:00,
        "priority":"low",
        "status":"done"
    }

Update task
PATCH http://localhost:8080/task/id
    {
        "title":"work24"
        "description":"office work"
        "dueDate":2024-12-01T18:30:00.000+00:00
        "priority":"medium",
        "status":"done"
    }

Delete task
DELETE http://localhost:8080/taskk/id
```

Include screenshots as necessary.

## Credentials

## API Endpoints
**user authentication**<br/>
POST http://localhost:8080/register - register user <br/>
POST http://localhost:8080/login - user login<br/>
GET http://localhost:8080/logout - user logout<br/>
<br/>
**task endpoints**<br/>
GET http://localhost:8080/task/ - retrieve all all tasks <br/>
GET http://localhost:8080/task/id - retrieve single task<br/>
POST http://localhost:8080/task/create - create task<br/>
PATCH http://localhost:8080/task/id - update task<br/>
DELETE http://localhost:8080/taskk/id - delete task<br/>

## Technology Stack
List and provide a brief overview of the technologies used in the project.

- Node.js
- Express.js
- MongoDB
- Other libraries/modules
