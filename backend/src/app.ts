import express from "express";
import { TodoRouter } from "./api/todos";
import cors from "cors";
import { UniversityRouter } from "./api/university";
import { GroupRouter } from "./api/group";
import { FundrasierRouter } from "./api/fundraiser";

const app = express();
const corsConfig = {
	origin: "https://programming-competition.vercel.app",
	optionsSuccessStatus: 200,
};

app.get("/", (req, res) => {
	res.send("Hello TypeScript!");
});

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", TodoRouter);
app.use("/api", UniversityRouter);
app.use("/api", GroupRouter);
app.use("/api", FundrasierRouter);

export default app;
