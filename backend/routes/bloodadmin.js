const express = require('express');
const {bloodBankModel} = require('../schemas/db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = '123';

const bloodRouter = express.Router();

bloodRouter.post('/signup', async (_request, _response) => {
    try{

        const body = _request.body;

        console.log(body);
        
        const emailExist = await bloodBankModel.findOne({
            adminEmail: body.email,
            adminPassword: body.password
        });

        console.log(emailExist);

        if(emailExist){
            return _response.json({
                "message": "email already exists"
            });
        } else {
            const bloodBankConfirmation = await bloodBankModel.create({
                bid: body.bid,
                adminEmail: body.email,
                adminPassword: body.password
            });

            if(!bloodBankConfirmation){
                return _response.json({
                    "message": "server internal error, please try again"
                });
            } else {
                return _response.json({
                    "message": "blood bank created successfully"
                });
            }
        }

    } catch(error){

        return _response.json({
            error
        });

    }
});

bloodRouter.post('/signin', async (_request, _response) => {
    try{
        const body = _request.body;
        const userFound = await bloodBankModel.findOne({
            adminEmail: body.email,
            adminPassword: body.password
        });

        if(userFound){
            const token = jwt.sign({
                userFound
            }, JWT_SECRET);

            console.log(token);
            
            return _response.json({
                "Message": "Access Granted",
                "Token": token
            });
        } else {
            return _response.json({
                "message": "Invalid credentials, Access Denied"
            })
        }
    } catch(error) {
        console.log(error);
        return _response.json({
            error
        });
    }
});

bloodRouter.put('/', async (_request, _response) => {
    try {
        const body = _request.body;
        console.log(_request.headers.authorization);
        const token = _request.headers.authorization;
        console.log("Authorization Header:", token);

        if (!token) {
            return _response.status(401).json({
                message: "Token not found in the headers"
            });
        }

        const rawToken = token.split(' ')[1];
        if (!rawToken) {
            return _response.status(401).json({ message: "Malformed authorization header" });
        }
        console.log("Raw Token:", rawToken);

        let decoded;
        try {
            decoded = jwt.verify(rawToken, JWT_SECRET);
        } catch (err) {
            console.error("JWT Verification Error:", err.message);
            return _response.status(401).json({ message: "Invalid or expired token" });
        }
        console.log("Decoded Token:", decoded);

        if (!decoded.userFound._id || !decoded.userFound.bid) {
            return _response.status(400).json({ message: "Invalid token payload" });
        }

        const updatedBloodBank = await bloodBankModel.updateOne(
            { _id: decoded.userFound._id },
            {
                bid: body.bid,
                adminEmail: body.adminEmail,
                adminPassword: body.adminPassword,
                apos: body.apos,
                aneg: body.aneg,
                bpos: body.bpos,
                bneg: body.bneg,
                abpos: body.abpos,
                abneg: body.abneg,
                opos: body.opos,
                oneg: body.oneg,
            }
        );

        return _response.json({
            message: "Updated successfully",
            updatedBloodBank,
        });

    } catch (error) {
        console.error("Error:", error.message);
        return _response.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
});





module.exports = bloodRouter;