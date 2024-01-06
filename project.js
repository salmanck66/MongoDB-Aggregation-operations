const { MongoClient } = require('mongodb');
const punycode = require('punycode/');
async function runAggregation() {
  const uri = 'mongodb://localhost:27017/test';
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('Connected to the database');
    const collection = client.db().collection('persons');
    const pipeline = [
      {$project:{_id:0,eyeColor:1,name:1}},{$limit:1}]
    const result = await collection.aggregate(pipeline).toArray();
    console.log(result);
  } finally {
    await client.close();
  }
}
runAggregation();
