import oktaClient from '../lib/oktaClient';
import dbQuery from '../db/dbQuery';
import regeneratorRuntime from 'regenerator-runtime';

import { updateUserFlag, updateUserAccess, updateUserGodinScore } from '../helpers/user_helpers';

// Register user with Okta
const registerUser = (req, res, next) => {
    if (!req.body) return res.sendStatus(400);
    const newUser = {
        profile: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            login:req.body.email
        },
        credentials: {
            password: {
                value: req.body.password
            }
        }
    };
    oktaClient.createUser(newUser).then(user => {
        res.status(201).send(user);
        next();
    }).catch(err => {
        res.status(400).send(err);
    });
}

// Add user to PostgreSQL users table
const addUser = async (req, res) => {
    const { firstName, lastName, email } = req.body;
    const query = 'INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const vals = [firstName, lastName, email, 'none', false, false, null];

    try {
        const res = await dbQuery.query(query, vals);
        console.log(res);
    } catch (error) {
        return res.status(500).send("Couldn't register user");
    }
}

export {
    registerUser,
    addUser
}