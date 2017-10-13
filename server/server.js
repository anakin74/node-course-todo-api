var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
  useMongoClient: true,
});

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model('Users',{
  email: {
    type: String,
    required: true,
    minlenght: 1,
    trim: true
  }
});


var newUser = new User({
  email: '     vdbos.marjolein@gmail.com'
});

newUser.save().then((doc) => {
  console.log('Saved User');
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('foutje bij het schrijven van user object', e);
});


var newTodo = new Todo({
  text: '      edit this video'
});

newTodo.save().then((doc) => {
  console.log('Saved Todo');
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('unable to save todo', e);
});

//challenge, create new mongoose model for users
//email must be require and trimmed type must be a string minlenght must be one
//create a user entry
