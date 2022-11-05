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
};

const getUserName = (req, res) => {
    const userId = req.query.currentId;

    sequelize.query(`
    SELECT * FROM users WHERE user_id = ${userId}
    `)
        .then((dbResult) => {
            res.status(200).send(dbResult[0][0])
        })
};

const createPost = (req, res) => {
    const title = req.body.title;
    const pictureUrl = req.body.pictureUrl;
    const coordinates = req.body.coordinates;
    const fourByFour = req.body.fourByFour;
    const dogFriendly = req.body.dogFriendly;
    const month = req.body.month;
    const comments = req.body.comments;
    const currentId = req.body.currentId;
    const campType = req.body.campType;

    sequelize.query(`
    INSERT INTO camp_entry (camp_entry_title, camp_entry_url, camp_entry_coordinates, camp_entry_comments, camp_entry_four_wheel, camp_entry_month, camp_entry_dog_friendly, camp_entry_camp_type, user_id)
    VALUES ('${title}', '${pictureUrl}', '${coordinates}', '${comments}', '${fourByFour}', '${month}', '${dogFriendly}', '${campType}', '${currentId}') RETURNING *;
    `)
        .then((newPostResult) => {
            console.log(newPostResult[0])
            res.status(200).send(newPostResult[0][0])
        })
};






module.exports = { createUser, checkUsers, getUserName, createPost }