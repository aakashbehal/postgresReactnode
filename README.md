### Technology Stack
```
NodeJs
ExpressJs
Postgres
ReactJs
```

### How to setup database
```
Install postgres and set its username as {username} and password as {password}
Then create a database called users_db (username password can be found in .env file)

DATABASE_URL=postgres://{username}:{password}@127.0.0.1:5432/{users_db}
```
### Create a table named users
```
node db createUserTable
```

### Start a node server
```
root folder > node server.js
```

### Start a react server
```
root folder > client > npm run start
```
