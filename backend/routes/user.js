const express = require('express');
const {userModel} = require('../schemas/db');

const userRouter = express.Router();

userRouter.post('/signin', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the user Router"
    });
});

userRouter.post('/signup', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the user Router"
    });
});

userRouter.delete('/signout', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the user Router"
    });
});

module.exports = userRouter;