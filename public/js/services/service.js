app.factory('products', ['$http', function($http) {

	var productService = {

	};

	// get list of all products
	productService.getAll = function() {
		return $http.get('/products'); // what type of obj return?
	};

	//add new product
	productService.add = function(newProduct) {
		return $http.post('/addProduct', newProduct);

	};

	productService.remove = function(prodId) {
		console.log(prodId);
		//The body of a HTTP post is a key/value
		return $http.post('/removeProduct', {"id":prodId});
	};




	return productService;
}]);


