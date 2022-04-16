const express = require('express');
const router = require('./router');

const PORT = 3001;
const app = express();

app.use('/api', router);

app.get('/test', (req, res) => {
    res.send('test');
})

app.listen(PORT, () => {
    console.log(`Application is running on ${PORT} port`);
})