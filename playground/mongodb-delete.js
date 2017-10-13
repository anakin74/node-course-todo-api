// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

//deleteMany
// db.collection('Todos').deleteMany({text:'Feed the cat'}).then((result) => {
//   console.log(result);
// })

// db.collection('Users').deleteMany({name: 'Bram van den Bos'}).then((result) => {
//   console.log(result);
// })

//deleteOne
// db.collection('Todos').deleteOne({text: 'buy groceries'}).then((result) => {
//   console.log(result);
// });


//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// })

db.collection('Users').findOneAndDelete({_id:
  ObjectID("59cb54f91bf7ea5634b2424d")}).then((result) => {
  console.log(result);
})

  // db.close();
});
