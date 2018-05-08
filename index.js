const express = require('express');

const app = express();

app.post('/webhook-test', (req, res) => {
    
    res.json({
        response: 'hello!'
    });
});

app.listen(process.env.PORT || 8000, () => {
    console.log('I\'m listening ~_~3');
});