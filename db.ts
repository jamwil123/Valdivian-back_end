import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbUrl = `mongodb+srv://${dbUser}:${dbPass}@valdivian.v5qmnu1.mongodb.net/?retryWrites=true&w=majority`;

MongoClient.connect(dbUrl).then(() => {
  console.log('Connected to db <<<<<<<<<<<<<<<<');
});
