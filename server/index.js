require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const { createUser, checkUsers, getUserName, createPost } = require('./controller');



app.post('/api/user', createUser);
app.post('/api/checkUsers', checkUsers);
app.post('/api/newPost', createPost);

app.get('/api/getUserName', getUserName);


app.listen(4004, () => console.log('Vibin on 4004'));