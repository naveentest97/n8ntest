const { MongoClient } = require('mongodb');
console.log("checck",MongoClient)
// Connection URL
// const url = 'mongodb+srv://naveen:test@cluster0.fwqel.mongodb.net';
// const client = new MongoClient(url);
async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = "mongodb+srv://naveen:test@cluster0.fwqel.mongodb.net";


  let client = new MongoClient(uri);
//   console.log("clie",JSON.stringify(client))
//   try {
//       // Connect to the MongoDB cluster
//       await client.connect();

//       // Make the appropriate DB calls
      await  listDatabases(client);

//   } catch (e) {
//       console.error(e);
//   } finally {
//       await client.close();
//   }
// }

// main().catch(console.error);

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// const dbName = "n8n-test";
}
// client
//       .connect()
//       .then(
//         client =>
//           client
//             .db(dbName)
//             .listCollections()
//             .toArray() // Returns a promise that will resolve to the list of the collections
//       )
//       .then(cols => console.log("Collections", cols))
//       .finally(() => client.close());
};


