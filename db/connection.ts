import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbUri = `mongodb+srv://${dbUser}:${dbPass}@valdivian.v5qmnu1.mongodb.net/?retryWrites=true&w=majority`;

const connection = MongoClient.connect(dbUri).then(() => {
  console.log('Connected to db <<<<<<<<<<<<<<<<');
});
