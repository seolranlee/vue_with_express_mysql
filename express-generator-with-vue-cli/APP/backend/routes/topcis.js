var express = require('express');
var router = express.Router();
// var movies = require('../movies');
var mysql      = require('mysql');
var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1111',
    database : 'o2'
});
conn.connect();

// router.get(['/', '/:id'], function (req, res, next) {
//     var sql = 'SELECT id, title FROM topic';
//     conn.query(sql, function(err, topics, fields){
//         res.send(topics)
//     });
//     // res.send(topics)
// });


router.get(['/', '/:id'], function (req, res, next) {
    var sql = 'SELECT * FROM topic';
    conn.query(sql, function(err, topics, fields){
        res.send(topics);
    });
});

router.post(['/:id/edit'], function(req, res){

    var title = req.body.title;
    var description = req.body.description;
    var author = req.body.author;
    var id = req.params.id;

    var sql = 'UPDATE topic SET title=?, description=?, author=? WHERE id=?';
    conn.query(sql, [title, description, author, id], function(err, result, fields){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
    });
});

router.post('/add', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    var author = req.body.author;

    var sql = 'INSERT INTO topic (title, description, author) VALUES (?, ?, ?)';
    conn.query(sql, [title, description, author], function(err, result, fields){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        console.log(result);
        res.send(result);
    })
});

router.post('/:id/delete', function(req, res){
    var id = req.params.id;
    var sql = 'DELETE FROM topic WHERE id=?';
    conn.query(sql, [id], function(err, result){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        // res.redirect('/topic');
    })
});


module.exports = router;