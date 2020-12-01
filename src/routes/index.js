const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title:'Dead Space'});
});

router.get('/contact', (req, res) => {
    res.render('contact', {title: "contact page"});
});

module.exports = router;