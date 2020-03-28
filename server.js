const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./public/routes/api')

const uri = "mongodb+srv://test:test@munch-flyp4.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(process.env.MONGODB_URI || uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true   
});
mongoose.connection.on('connected', () => {
    console.log('Mongodb is Connected..');
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HTTP request logger
app.use(morgan('tiny'));
app.use('/', routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/build'))
}

app.listen(PORT, console.log(`server is running`));

 