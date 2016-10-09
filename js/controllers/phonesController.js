/*var myApp=angular.module('myApp');
myApp.controller('phoneController', function($scope) {

  $scope.phone = {
         
        name: 'Nokia Lumia 630',
        year: 2014,
        price: 200,
        company: {
            name: 'Nokia',
            country: 'Финляндия'
        }
    }
});*/
app.controller("StoreController", function(){
	this.products= [
	{
		name: 'Cool me',
		price: 250,
		description:"vfvfvvvf",
		images:[...],
		reviews: [{
			stars: 5,
			body: "I love myself",
			author: "Mthfcker"
		},
		]
}]