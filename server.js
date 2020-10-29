const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.static(__dirname));

app.use(cors());

require('./module/route')(app);

app.listen(3000, (req, res) => {
    console.log('server is running');
})