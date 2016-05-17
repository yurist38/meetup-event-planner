var express = require('express'),
    router  = express.Router();

router.get('/', function (req, res) {
    res.render('index', { title: 'Home' });
});

router.get('/events', function (req, res) {
    res.render('events', { title: 'Events' });
});

module.exports = router;
