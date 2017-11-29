const express = require('express');
const app = express();

const path = __dirname + '/public/';
var port = 4000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json())

// const MongoClient = require('mongodb').MongoClient;
// const ObjectId = require('mongodb').ObjectID;
// const mongodburl = 'mongodb://Ahmad:Use95ver@cluster0-shard-00-00-9zvke.mongodb.net:27017,cluster0-shard-00-01-9zvke.mongodb.net:27017,cluster0-shard-00-02-9zvke.mongodb.net:27017/zalandodummy?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';



//Middleware
app.use(express.static(__dirname+ '/public'));

//Listening on port
/*app.listen(port, function(){
console.log('Listening on port: '+port);
});
*/

//Website start
app.get('/', function(req, res){
    res.sendfile(path + 'index.html')
});

//When click on login
app.get('/login', function(req, res){
    res.sendfile(path + 'login.html');
});

app.post('/', function(req, res){
    res.sendfile(path + 'logged_in.html');
});


// // // READ (all)
// app.get('/users', function (req, res) {
// MongoClient.connect(mongodburl, function (err, db) {

// var col = db.collection('users');

// // Read All
// col.find().toArray(function (err, result) {
// console.log(result);
// res.json(result);
// });
// db.close();
// });
// });

// // READ (one)
// app.get('/customers/:id', function (req, res) {

// MongoClient.connect(mongodburl, function (err, db) {
// var col = db.collection('customers');

// col.findOne({ '_id': ObjectId(req.params.id) }, function (err, result) {
// res.json(result);
// })
// db.close();
// });
// });

// // DELETE
// app.delete('/customers/:id', function (req, res) {
    
// MongoClient.connect(mongodburl, function (err, db) {
// var col = db.collection('customers');
    
// col.deleteOne({ '_id': ObjectId(req.params.id) }, function (err, result) {
// res.status(204);
// res.json();
// });
    
// db.close();
// });
// });

app.listen(process.env.PORT || 4000);

//create