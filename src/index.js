import app from "./app"
import { dbConnect } from "./database";
import {MONGODB_URI, PORT} from "./config"

app.listen(PORT);
const db = dbConnect(MONGODB_URI);
console.log("Server on port", PORT);