var express = require('express');
var bodyParser = require('body-parser');
// var moongose = require('moongose');

// moongose.connect('mongodb://localhost/nameDB');

/*var routes = require('./routes/index');
var users = require('./require/users');
*/

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// public access from clientside
app.use(express.static('public'));
app.use(express.static('node_modules'));
// app.use('/', routes);
// app.use('/users', users);

//dummy data
var products = [
	{
		    id: 2,
		    name: "Leanne Graham",
		    brand: "Cailyn",
		    price: 10.4,
		    img: "/img/something.jpg"
		  },
		  {
		    id: 3,
		    name: "Ervin Howell",
		    brand: "Emani",
		    price: 10.4,
		    img: "/img/something.jpg"
		  },
		  {
		    id: 4,
		    name: "Clementine Bauch",
		    brand: "ARTDECO",
		    price: 10.4,
		    img: "/img/something.jpg"
		  },
		  {
		    id: 5,
		    name: "Patricia Lebsack",
		    brand: "L.A. Girl",
		    price: 10.4,
		    img: "/img/something.jpg"
		  },
		  {
		    id: 68,
		    name: "Chelsey Dietrich",
		    brand: "Palladio",
		    price: 10.4,
		    img: "/img/something.jpg"
		  }
];

//entry point to get contacts
app.get('/products', function(req, res, next) {
	 console.log('/products');
	res.json(products);
});


var doNewProduct = function(req, res, next) {

	 console.log('/addProduct');

var newProduct = req.body;
	newProduct.id = products.length + 1;
	console.log(newProduct.id);
	newProduct.image= 'https://afusec.files.wordpress.com/2014/11/stella-artois.jpg';
	products.push(newProduct);

	res.json(products);
};

//entry point to add new product
app.post('/addProduct', doNewProduct);

//entry point to delete a product
app.post('/removeProduct', function(req, res, next) {
	console.log('/removeProduct');
	console.log(req.body.id);


	//find index of requested deleted obj
	var itemRemove;
	for (var i = 0; i < products.length; i++) {
		console.log(products[i].id);
		console.log(req.body.id);

 		if (products[i].id  === req.body.id) {
 			// got the right product
 			itemRemove = i;
 		}
	}
	console.log('itemRemove =', itemRemove);
	// delete product by index
	 products.splice(itemRemove, 1);
	res.json(products);

});


var port = process.env.PORT || '8000';

app.listen(port, function() {
	console.log('server is up at ', port);
});








