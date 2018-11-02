var express = require('express');
var router = express.Router();
// var movies = require('../movies.json');
var mysql      = require('mysql');
var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1111',
    database : 'movies'
});

router.get('/', function (req, res, next) {
    var sql = 'SELECT * FROM topic';
    conn.query(sql, function(err, movies, fields){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.send(movies)
    })
});

router.get('/:id', function (req, res, next) {
    // parseInt(string, radix): 특정 정수를 반환
    var id = parseInt(req.params.id, 10);
    var sql = 'SELECT * FROM topic';
    conn.query(sql, function(err, movies, fields){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        var movie = movies.filter(function (movie) {
            return movie.id === id
        });
        res.send(movie);
    })
});

module.exports = router;