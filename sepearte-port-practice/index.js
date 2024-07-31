const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const mongoPort = process.env.mongoPort || 3000;
const mongoHost=process.env.mongoHost || 'localhost'

mongoose.connect(`mongodb://${mongoHost}:${mongoPort}/DB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', (req, res) => {
    res.send('Hello from kubernet practice')
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
