'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook-test', (req, res) => {

    console.log(req.body);
    
    let commandText = req.body.queryResult 
        && req.body.queryResult.parameters 
        && req.body.queryResult.parameters.reverseThisText;

    let speech = commandText 
        && commandText.split(' ').reverse().join(' ') 
        || 'I didn\'t quite get that, come again?';

    return res.json({
        speech: speech,
        fulfillmentText: 'Returning reversed text on fulfillment',
        displayText: 'Returning reversed text!',
        source: 'webhook test'
    });
});

app.listen(process.env.PORT || 8000, () => {
    console.log('I\'m listening ~_~3');
});