import bcrypt from 'bcrypt';
import User from "../models/user.model.js";
import { generateToken } from "../config/jwtProvider.js";

// register user
export const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send(`User Already Exist with this ${email} email`);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
        });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// login user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
    
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = generateToken(user._id);
    
            res.status(200).json({ user, token });
        } else {
            res.status(400).json({ message: "Invalid Credentials" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

// update user by id
export const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        const updatedUser = await User.findByIdAndUpdate(userId, {
            $set: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email
            }
        });

        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ message: 'User updated successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete user by id
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        
        const deletedUser = await User.findByIdAndRemove(userId);

        if (!deletedUser) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ message: 'User deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}