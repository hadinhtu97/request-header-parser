const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({ optionsSuccessStatus: 200 }));

app.get('/', (req, res) => res.send('Read README to use api.'));

app.get('/api/whoami', (req, res) => {
    res.json({
        ipaddress: req.ip,
        language: req.headers["accept-language"],
        software: req.headers["user-agent"]
    })
})

app.listen(port, () => {
    console.log('Your app is listening on port ' + port);
})