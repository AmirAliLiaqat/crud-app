import { getUserIdFromToken } from "../config/jwtProvider.js";
import User from "../models/user.model.js";

export const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        
        if(!token) {
            return res.status(401).json({ error: 'Token not found' }); 
        }

        const userId = getUserIdFromToken(token);
        const user = await User.findById({ _id: userId });

        if(!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};