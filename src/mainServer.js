var Power = require('./common/util/math/Power');
var express = require('express');
var apiV2HelpRouter = require('./routes/v2/help');

var app = express();

app.set('views', './src/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Hello express with ejs' },
        name: 'Brian',
        lastname: 'Buckley'
    };
    res.render('./pages/home.ejs', data2template);
});

app.get('/Square', function(req, res) {
    var inpNum = 2;
    var resultNum = Power.toSquare(inpNum);
    var data2template = {
        head: { title: 'Squaring a number' },
        inpNumber: inpNum,
        resultNumber: resultNum
    };
    res.render('pages/Square.ejs', data2template);
});


app.get('/Cube', function(req, res) {
    var inpNum2 = 3;
    var resultNum2 = Power.toCube(inpNum2);
    var data2template = {
        head: { title: 'Cubing a number' },
        inpNumber: inpNum2,
        resultNumber: resultNum2
    };
    res.render('pages/Cube.ejs', data2template);
});

app.get('/about', function(req, res) {
    res.status(200).render('pages/about.html');
});
var apiV1HelpRouter = express.Router();
apiV1HelpRouter.route('/help')
    .get((request, response) => { response.send('<h3>/api/v1/help got GET - text/html directly returned from server.js</h3>'); })
    .post((request, response) => { response.send('<h3>/api/v1/help got POST - text/html directly returned from server.js</h3>'); })
    .put((request, response) => { response.send('<h3>/api/v1/help got PUT - text/html directly returned from server.js</h3>'); });
app.use('/api/v1', apiV1HelpRouter);
app.use('/api/v2', apiV2HelpRouter);

app.get('/*', function(req, res) {
    res.status(404).render('pages/error.ejs', { head: { title: 'Error' } });
});

var server = app.listen(8015, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});