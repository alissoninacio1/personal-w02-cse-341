require('dotenv').config();

const {MongoClient} = require('mongodb');
const mongoURI = process.env.MONGODB_URI;
const password = process.env.PASSWORD


async function main() {

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
    
        await listDatabases(client);
     
    } catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }

}

main().catch(console.error);