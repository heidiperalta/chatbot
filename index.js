import express from "express";

const app = express();

app.get('/test', (req, res) => {
    res.json({
        response: 'hello!'
    });
});

app.listen(port.env.PORT || 8000, () => {
    console.log('~_~3');
});