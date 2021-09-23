const MongoClient = require("mongodb").MongoClient;

// develop
const SCHEME = `mongodb`;
const USER_NAME = `casinoplus`;
const PASSWORD = `casinoplus`;
const HOST_NAME = `mongo:27017`;
const DB_NAME = `casinoplus`;

export function testMongo() {
  const uri = `${SCHEME}://${USER_NAME}:${PASSWORD}@${HOST_NAME}/${DB_NAME}?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    const collection = client.db(DB_NAME).collection("grids");
    console.log("Connected successfully to server");
    const documents = [{ a: 1 }, { a: 2 }, { a: 3 }];
    collection.insertMany(documents, (err, result) => {
      console.log("Inserted 3 documents into the collection");
      console.log(result);
      client.close();
    });
  });
}
