const { MongoClient } = require('mongodb');
async function runAggregation() {
  const uri = 'mongodb://localhost:27017/test';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Connected to the database');
    const collection = client.db().collection('persons');
    const pipeline = [
      {$match:{eyeColor:"brown"}},{$limit:1}]
    const result = await collection.aggregate(pipeline).toArray();
    console.log(result);
  } finally {
    await client.close();
  }
}
runAggregation();
