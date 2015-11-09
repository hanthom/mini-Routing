var app = angular.module('miniRouting', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider 
		.state("home", {
			url:'/',
			controller: "homeCtrl",
			templateUrl: "js/Home/homeTemplate.html"
		})

		.state("settings", {
			url:'/settings',
			controller: "settingsCtrl",
			templateUrl: "js/Settings/settingsTemplate.html"
		})

		.state("products", {
			url: '/products/:id',
			controller: "productCtrl",
			templateUrl: "js/Products/productsTemplate.html"
		});

})