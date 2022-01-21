import express from "express";
import cors from "cors";
import todoRouter from "./routes/routes.js";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";
import connectDb from "./db/db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", todoRouter);
app.use("/api/v2", userRouter);

const PORT = process.env.PORT || 8200;

const main = () => {
	connectDb();
	app.listen(PORT, function () {
		console.log(`Express server listening on port http://localhost:${PORT}`);
	});
};

main();
