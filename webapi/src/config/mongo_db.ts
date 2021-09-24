const MongoClient = require("mongodb").MongoClient;
import * as Config from "./config";

export function testMongo() {
  const uri = `${Config.mongoDB.scheme}://${Config.mongoDB.user_name}:${Config.mongoDB.password}@${Config.mongoDB.host}/${Config.mongoDB.db_name}?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    const collection = client.db(Config.mongoDB.db_name).collection("grids");
    console.log("Connected successfully to server");
    const documents = [{ a: "My name is RubyDog" }, { a: 2 }, { a: 3 }];
    collection.insertMany(documents, (err, result) => {
      console.log("Inserted 3 documents into the collection");
      console.log(result);
      client.close();
    });
  });
}
