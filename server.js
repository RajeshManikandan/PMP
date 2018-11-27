const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const mongooseUrl = require('./setup/myUrl').urls.mongoose;

//Middleware for Body Parser
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//Connect to Database
mongoose
    .connect(mongooseUrl, { useNewUrlParser: true })
    .then(() => console.log('Database Connected'))
    .catch(err => console.log('dbConnectError : ' + err));

//Importing Routes
const todo = require('./routes/api/todo');
const auth = require('./routes/api/auth');

//@Route    GET
//ACCESS    PUBLIC
//DESC      Sample route for testing
app.get('/', (req, res) => {
    res.send('Server is Running');
});

//Middleware for Passport
app.use(passport.initialize());

//Config for JWT stratergy
require('./strategies/jsonwtStategy')(passport);

//Setting Up Routes
app.use('/todo', todo);
app.use('/auth', auth);

//listening to port
const port = process.env.port | 8000;
app.listen(port, () => console.log('server is running in port ' + port));
