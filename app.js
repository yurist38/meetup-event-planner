var express    = require('express'),
    exphbs     = require('express-handlebars'),
    http       = require('http'),
    routes     = require('./lib/routes'),
    bodyParser = require('body-parser'),
    app        = express(),
    ext        = 'handlebars';

app.engine(ext, exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', ext);
app.disable('etag');

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

http.createServer(app).listen(3000, function () {
    console.log('Server started successfully! Please open "http://localhost:3000" page in your web-browser...');
});

module.exports = app;
