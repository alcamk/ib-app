const express = require('express');
const app = express();// servidor 
const morgan = require('morgan'); 
const path = require('path'); 

//DB connection
const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Midleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/task.routes'));
 
//Statics Files 
app.use(express.static(path.join(__dirname, 'public')));

//starting server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});    