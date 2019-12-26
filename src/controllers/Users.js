
const uuidv4 = require('uuid/v4')
const db = require('../db')
const Helper = require('./Helper')


/**
 * Create a new user
 * @param {object} req 
 * @param {object} res
 * @return  
 */
const signup = async (req, res) => {
    console.log(req.body)
    if (!req.body.email || !req.body.password || !req.body.user_name) {
        return res.status(400).send({ 'message': 'Some values are missing' });
    }
    if (!Helper.isEmailValid(req.body.email)) {
        return res.status(400).send({ 'message': 'Please enter a valid email address' })
    }
    const hashPassword = Helper.passwordHash(req.body.password)

    const createQuery = `INSERT INTO users (id, email, user_name, password, created_date, modified_date) VALUES($1, $2, $3, $4, $5) returing *`

    const values = [
        uuidv4(),
        req.body.email,
        req.body.user_name,
        hashPassword,
        new Date(),
        new Date()
    ]
    console.log(values)
    try {
        const { rows } = await db.query(createQuery, values);
        const token = Helper.generateToken(rows[0].id)
        return res.status(201).send({ token });
    } catch (error) {
        if (error.routine == '_bt_check_unique') {
            return res.status(400).send({ 'message': 'User with that EMAIL already exist' })
        }
        return res.status(400).send(error);
    }

};



/**
 * 
 * @param {object} req 
 * @param {object} res 
 */
const login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ 'message': 'Some values are missing' });
    }
    if (!Helper.isEmailValid(req.body.email)) {
        return res.status(400).send({ 'message': 'Please enter a valid email address' })
    }

    const text = 'SELECT * FROM users WHERE email = $1';
    try {
        const { rows } = await db.query(text, [req.body.email]);
        if (!rows[0]) {
            return res.status(400).send({ 'message': 'The credentials you provided is incorrect' });
        }
        if (!Helper.comparePassword(rows[0].password, req.body.password)) {
            return res.status(400).send({ 'message': 'The credentials you provided is incorrect' });
        }
        const token = Helper.generateToken(rows[0].id);
        return res.status(200).send({ token });
    }
    catch (error) {
        return res.status(400).send(error)
    }
}

module.exports = {
    signup,
    login
}