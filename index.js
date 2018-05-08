'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook-test', (req, res) => {
    
    let commandText = req.body.result && req.body.result.params && req.body.result.params.text;
    let speech = commandText && commandText.split(' ').reverse().join(' ') || 'I didn\'t quite get that, come again?';

    return res.json({
        speech: speech,
        displayText: 'Returning reversed text!',
        source: 'webhook test'
    });
});

app.listen(process.env.PORT || 8000, () => {
    console.log('I\'m listening ~_~3');
});