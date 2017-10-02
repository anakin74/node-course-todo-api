// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59c9088f9831f20d607d2e4a')}).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });


  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Number of Todos: ${count}`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

//challenge, write a query that finds all records where the name is Bram

  db.collection('Users').find({name: 'Marjolein van den Bos'}).toArray().then((docs) => {
    console.log(`I found the following documents for you: `);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });


  // db.close();
});
