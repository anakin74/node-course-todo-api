// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');



  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('unable to insert todo', err);
  //     }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //insert a new doc in the Users collection (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Bram van den Bos',
  //   age: 11,
  //   location: 'Vijfhuizen'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('I was unable to write this new document', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });


  db.close();
});
