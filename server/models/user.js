import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
	_id: Schema.Types.ObjectId,
	firstname: { type: String, required: true },
	lastname: String,
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	todo: [{ type: Schema.Types.ObjectId, ref: "TodoSchema" }],
});

const UserSchema = mongoose.model("user", userSchema);

export default UserSchema;
