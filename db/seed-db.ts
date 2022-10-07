import {MongoClient} from "mongodb";
import {books} from "./data";
import dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` })

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbUri = `mongodb+srv://${dbUser}:${dbPass}@valdivian.v5qmnu1.mongodb.net/?retryWrites=true&w=majority`;

async function seed() {
    const client = new MongoClient(dbUri);
    console.log("client made")


    try {
        // connect to Mongo cluster
        await client.connect();
        console.log("connected")

        // make DB calls
        await createListing(
            client,
            books
        );
    } catch {
        console.error
    } finally {
        // close the connection
        await client.close();
    }
}

seed();

async function createListing(client:any, newListing:object) {
    const result = await client
        .db("Valdivian-db")
        .collection("Products")
        .insertMany(newListing);
    console.log(
        `${result.insertedCount} new listing(s) created with the following id(s):`
    );
    console.log(result.insertedIds);
}
