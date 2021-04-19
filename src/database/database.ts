import { Pool} from "pg"
import path from 'path';

const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../../config.env') });

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on("connect", () => {
    console.log("Database connected with success");
})

module.exports = {
    query: (text: string, params: any) => pool.query(text, params),
};