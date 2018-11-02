var express = require('express');
var router = express.Router();
// var movies = require('../movies.json');
var mysql      = require('mysql');
var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1111',
    database : 'o2'
});

router.get(['/', '/:id'], function (req, res, next) {
    var sql = 'SELECT id, title FROM topic';
    conn.query(sql, function(err, todos, fields){
        var id = req.params.id;
        if(id){
            var sql = 'SELECT * FROM topic WHERE id=?';
            conn.query(sql, [id], function(err, todo, fields){
                if(err){
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                }else{
                    // res.send(rows);
                    res.send({todos: todos, todo: todo[0]});
                }

            })
        }else{
            res.send({todos: todos});
        }
    });
});


module.exports = router;