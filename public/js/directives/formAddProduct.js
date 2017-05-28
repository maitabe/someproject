app.directive('formAddProduct', ['products', function(products) {

	return {
		restrict: 'AE',
		replace: true,
		templateUrl: '/templates/productsDirective.html'
	};

}]);