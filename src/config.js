import { config } from "dotenv";

config();

export const MONGODB_URI = process.env.NODE_ENV === 'test' ? "mongodb://127.0.0.1/test" : process.env.MONGODB_URI;
export const PORT = process.env.PORT || 3000;
export default {
    SECRET: 'pampa-api'
}