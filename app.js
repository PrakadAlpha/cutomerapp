var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
/*
var logger = function(req, res, next){
	console.log('logging');
	next();
}

app.use(logger);
*/

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set static path
app.use(express.static(path.join(__dirname, 'public')));

var users = [
{
	id:1,
	first_name:'John',
	Last_name:'Doe',
	email:'ojwbgwng',
},
{
	id:2,
	first_name:'fucker',
	Last_name:'Doe',
	email:'ojwbgwng',
},
{
	id:3,
	first_name:'Mother',
	Last_name:'Doe',
	email:'ojwbgwng',
}


]

app.get('/', function(req, res){
	res.render('index',{
		title: 'Customers',
		users: users
	});
});

app.post('/users/add', function(req, res){
	console.log('FORM SUBMITTED');
	
});

app.listen(3000, function(){
	console.log('Server started');
})