import { ConnectionOptions, createConnection } from "mysql2";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import dotenv from "dotenv";

dotenv.config();


const options : ConnectionOptions = {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
};

const connection : Connection = createConnection(options);

export const db = connection.promise();
