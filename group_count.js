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
      {$group:{_id:{name:"$company.location.country"}}},{$count:"Total"}
    ]
    const result = await collection.aggregate(pipeline).toArray();
    console.log(result);
  } finally {
    await client.close();
  }
}
runAggregation();
