// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('search');
});

app.get('/results', (req, res) => {
    let query = req.query.search;
    let url = 'http://www.omdbapi.com/?s=' + query + '&apikey=thewdb';
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render('results', { data: data });
        }
    });
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});