var app = angular.module('shopApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

	var home = {
		name: 'home',
		url: '/home',
		// templateUrl: 'templates/firstpage.html'
	};

	var products = {
		name: 'products',
		url: '/products',
		templateUrl: 'templates/products.html'
	};

	var about = {
		name: 'about',
		url: '/about',
		templateUrl: 'templates/about.html'
	};

	$stateProvider.state(home);
	$stateProvider.state(products);
	$stateProvider.state(about);

	$urlRouterProvider.otherwise('/home');

	/*$stateProvider
	.state('firstpage', {
		url: '/firstpage',
		templateUrl: 'firstpage.html'
	});
*/

});