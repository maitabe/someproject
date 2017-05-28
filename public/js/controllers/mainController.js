app.controller('MainCtrl', ['$scope', 'products', function($scope, products) {
	console.log('im the MainCtrl');

	$scope.products = [];

	//get the array of products
	products.getAll().then(function(data) {
	  	$scope.products = data.data;
	});

	//console.log($scope.products);

	$scope.addProduct = function() {

		var promise = products.add($scope.newProduct);

	    promise.then(function(resFromServer) {
	    	//assign new products list to the view
	    	$scope.products = resFromServer.data;

	    	//clean form inputs
	    	$scope.newProduct = {};

	    	console.log($scope.products);
	    });

	};


	$scope.removeProduct = function(id) {
		products.remove(id).then(function(updatedData){
			$scope.products = updatedData.data;
		});
	};


}]);


