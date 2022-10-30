require('dotenv').config();
const { Sequelize } = require('sequelize');

const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

const createUser = (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    sequelize.query(`
    SELECT * FROM users WHERE LOWER(user_username) = '${username.toLowerCase()}';
    `)

        .then((dbResult) => {
            if (dbResult[0].length === 0) {
                sequelize.query(`
            INSERT INTO users (user_name, user_username, user_password)
            VALUES ('${name}', '${username}', '${password}') RETURNING *;
            `)
                    .then((newUserResult) => {
                        console.log(newUserResult[0])
                        res.status(200).send(newUserResult[0][0]);
                        return;
                    })
            } else {
                res.status(200).send(dbResult[0][0])
            }
        })
};

const checkUsers = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    sequelize.query(`
    SELECT * FROM users WHERE LOWER(user_username) = '${username.toLowerCase()}' AND user_password = '${password}';
    `)
        .then((dbResult) => {
            if (dbResult[0].length === 0) {
                res.status(200).send('')
            }
            res.status(200).send(dbResult[0][0])
        })
}

const getUserName = (req, res) => {
    const userId = req.query.currentId;

    sequelize.query(`
    SELECT * FROM users WHERE user_id = ${userId}
    `)
        .then((dbResult) => {
            res.status(200).send(dbResult[0][0])
        })
}






module.exports = { createUser, checkUsers, getUserName }