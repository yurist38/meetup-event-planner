var express = require('express'),
    router  = express.Router(),
    env     = require('../.env.json');

router.get('/', function (req, res) {
    res.render('index', { title: 'Home' });
});

router.get('/events', function (req, res) {
    res.render('events', {
        title: 'Events',
        gmapsApiKey: env.gmapsApiKey
    });
});

router.get('/add-event', function (req, res) {
    res.render('add-event', {
        title: 'Create New Event',
        gmapsApiKey: env.gmapsApiKey
    });
});

router.get('/login', function (req, res) {
    res.render('login', { title: 'Login' });
});

router.get('/register', function (req, res) {
    res.render('register', { title: 'Register' });
});

module.exports = router;
