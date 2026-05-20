## Tool Functionality ##
This is a database managing project; a REST API for managing tasks, built with Node.js, Express, and SQLite. The database is created from scratch and sent, deleted, updated by the user.

## Prerequisites ##
### Runtime ###
- Node.js
### Packages ###
- express
- better-sqlite3
### Testing Tool ###
- Postman

## Existing Endpoints ##
- GET    /tasks        - retrieve all tasks
- POST   /tasks        - create a new task (body: { title })
- PUT    /tasks/:id    - update a task (body: { title })
- DELETE /tasks/:id    - delete a task

## Setup Steps ##
- Clone the project
- Install the dependencies by running "npm install" in the terminal
- Start the server by running "node server.js" or "node --watch server.js" in the terminal
- Make your requests through Postman by changing between GET, POST, DELETE, PUT
