const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = express.Router();

// import model
require("../models/Message");

const Message = mongoose.model('messages');

// body-parser middleware
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post("/messages", urlencodedParser, (req, res) =>  {
    const newMessage = {
        username: req.body.username,
        message: req.body.message
    };
    new Message(newMessage)
        .save()
        .then(() => {
            res.send('message');
        })
});

router.get("/messages", (req, res) => {
    const messagesBack = [];
    Message.find({})
        .sort({date: "desc"})
        .then(messages => {
            messages.forEach(msg => {
                messagesBack.push({username: msg.username, content: msg.message});
            });
            res.send(messagesBack);
        });
});

module.exports = router;
