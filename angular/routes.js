//var myApp = angular.module('blogApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
           
        	templateUrl		: 'views/index-view.html',        	
            controller 		: 'BindingCode',
        	controllerAs 	: 'bindingCode'
        })

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);