const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// cors middleware
app.use(cors());

// connect to mongoose
mongoose.connect("mongodb+srv://ContactTest:ContactTest@contacttest-ilrcg.mongodb.net/test?retryWrites=true", { useNewUrlParser : true})
    .then(() => {
        console.log("MongoDB connected...");
    })
    .catch(err => {
        console.log(err);
    });

// load route
const messages = require('./routes/messages');

// require model
require("./models/Message");

const Message = mongoose.model('messages');

// bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// use route
app.use("/", messages);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
