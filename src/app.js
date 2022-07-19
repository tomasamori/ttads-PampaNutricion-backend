import express from "express";
import routes from "./routes/api/v1/index";
import morgan from "morgan";
import cors from "cors";
import {createRoles} from "./libs/initialSetup";

const app = express();
createRoles();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/v1", routes);

export default app;