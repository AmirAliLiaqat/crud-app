import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

// generate jwt token
export const generateToken = (userId) => {
    const token = jwt.sign(
        { userId: userId }, SECRET_KEY, { expiresIn: "48h" }
    );
    return token;
}

// get user id from token
export const getUserIdFromToken = (token) => {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    return decodedToken.userId;
};