const mongoose = require('mongoose');

//const URI = 'mongodb://localhost/mern-tasks';

mongoose.connect('mongodb+srv://Alvmk99:TJvcOYhq9ps3Ji5q@cluster0.bjtwf.mongodb.net/adopta?retryWrites=true&w=majority',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

    module.exports = mongoose;