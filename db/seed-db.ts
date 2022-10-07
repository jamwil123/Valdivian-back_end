import {MongoClient} from "mongodb";
import {products} from "./product-data";
import { users } from "./users-data";
import { reviews } from "./reviews-data";
import dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` })

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbUri = `mongodb+srv://${dbUser}:${dbPass}@valdivian.v5qmnu1.mongodb.net/?retryWrites=true&w=majority`;

// current collections
// Products / Reviews / Users

async function seed() {
    const client = new MongoClient(dbUri);
    console.log("client made")


    try {
        // connect to Mongo cluster
        await client.connect();
        console.log("connected")

        await emptyCollection(
            client,
            "Products"
        );
        await emptyCollection(
            client,
            "Reviews"
        );
        await emptyCollection(
            client,
            "Users"
        );

        // make DB calls
        await createListing(
            client,
            "Products",
            products
        );

        await createListing(
            client,
            "Users",
            users
        );

        await createListing(
            client,
            "Reviews",
            reviews
        );

    } catch {
        console.error
    } finally {
        // close the connection
        await client.close();
    }
}

seed();

async function emptyCollection(client:any, collName:string) {
    const result = await client
        .db("Valdivian-db")
        .collection(collName)
        .deleteMany({});
    console.log(result)
}

async function createListing(client:any, collName:string, newListing:object) {
    const result = await client
        .db("Valdivian-db")
        .collection(collName)
        .insertMany(newListing);
    console.log(
        `${result.insertedCount} new listing(s) created with the following id(s):`
    );
    console.log(result.insertedIds);  
}
