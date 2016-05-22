var express = require('express'),
    router  = express.Router();

router.get('/', function (req, res) {
    res.render('index', { title: 'Home' });
});

router.get('/events', function (req, res) {
    res.render('events', { title: 'Events' });
});

router.get('/login', function (req, res) {
    res.render('login', { title: 'Login' });
});

router.get('/register', function (req, res) {
    res.render('register', { title: 'Register' });
});

module.exports = router;
