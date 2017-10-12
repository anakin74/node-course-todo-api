// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('59c94709bb30af10e8f2cb26')
  }, {
    $set: {
      name: 'Ronald'
    },
    $inc: {
      age: 1}
    }
  ,{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
