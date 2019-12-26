/**
 * @file : server.js 
 * @auther
 */

const express = require('express');
const dotenv = require('dotenv')
const Users = require('./src/controllers/Users')

dotenv.config();
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).send({'message' : 'Its alive'})
})

app.post('/api/v1/users/signup', Users.signup);
app.post('/api/v1/users/login', Users.login);

app.listen(5000, () => {
    console.log('app running on port ', 5000)
})



