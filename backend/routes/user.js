const express = require('express');
const {userModel, hospitalModel} = require('../schemas/db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "123";

const userRouter = express.Router();

userRouter.post('/signin', async (_request, _response) => {

    const body = _request.body;

    const userFound = await userModel.findOne({
        email: body.email,
        password: body.password,
    });

    if(userFound){


        const token = jwt.sign({
            id: userFound._id,
            email: userFound.email,
            password: userFound.password,
            hospitalId: userFound.hospitalId
        }, JWT_SECRET);

        console.log(token);
        console.log('singin ni andar');

        return _response.json({
            "Message": "Access granted",
            "Token": token,
            "Data": userFound 
        });

    } else {

        return _response.status(404).json({
            "Message": "Access Denied, Invalid credentials"
        });

    }
});

userRouter.post('/signup', async (_request, _response) => {
    const body = _request.body;

    const doesEmailExist = await userModel.findOne({
        email: body.email
    });

    if(doesEmailExist){
        return _response.status(400).json({
            "Error": "Email already exist"
        });
    }
    
    else{

        const hopsitalCreatedConfirmation = await hospitalModel.create({
            hid: body.hid
        });

        console.log(hopsitalCreatedConfirmation);

        const userInsertedConfirmation = await userModel.create({
            email: body.email,
            password: body.password,
            hospitalId: hopsitalCreatedConfirmation._id
        });



        if(!userInsertedConfirmation){
            return _response.status(500).json({
                "Error": "Some internal Erro, Please try again"
            });
        } else {
            return _response.status(200).json({
                "Message": "User Created successfully"
            });
        }
    }
});

userRouter.delete('/signout', async (_request, _response) => {
    return _response.json({
        "message": "Welcome to the user Router"
    });
});

module.exports = userRouter;