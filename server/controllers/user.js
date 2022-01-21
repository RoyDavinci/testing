import UserSchema from "../models/user.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
	const { firstname, lastname, email, password } = req.body;
	try {
		const oldUser = await UserSchema.findOne({ email: email }).exec();
		if (!oldUser) {
			const hashedPassword = await bcrypt.hash(password, 10);
			const newUser = await UserSchema.create({
				_id: new mongoose.Types.ObjectId(),
				firstname: firstname,
				lastname: lastname,
				email: email,
				password: hashedPassword,
			});
			newUser.save();
			const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY);
			res.status(201).json({ details: { newUser, token } });
		} else {
			res.status(200).json({ message: "User already exists" });
		}
	} catch (error) {
		res.status(500).json({
			message: "Error from create user controller",
			error: error.message,
		});
	}
};

const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const oldUser = await UserSchema.findOne({ email: email })
			.exec()
			.then((user) => {
				return user;
			});

		const verifyUser = await bcrypt.compare(password, oldUser.password);
		if (verifyUser) {
			const token = jwt.sign({ id: oldUser._id }, process.env.SECRET_KEY);
			const { firstname, lastname, email, todo } = oldUser;
			return res.status(200).json({
				message: "Successfully logged in",
				details: {
					firstname,
					lastname,
					email,
					todo,
					token,
				},
			});
		} else {
			return res.status(300).json({ message: "Incorrect password" });
		}
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error from login controller", error: error.message });
	}
};

export { createUser, login };
