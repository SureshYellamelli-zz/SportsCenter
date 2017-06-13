// first we have to declare the module. note that [] is where we will declare the dependecies later. Right now we are leaving it blank
var myApp = angular.module('blogApp', []);


// this is without $scope
myApp.controller('mainController',['$http',function($http) {

    //create a context
    var main = this;
    this.blogs = [];
    console.log(this.blogs);
    this.matchlist = [];

    this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';

    this.loadAllBlogs = function(){
        $http({
            method: 'GET',
            url: main.baseUrl
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            alert('hi')
            console.log(response.data.name);
            main.pageHeading = response.data.name;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("some error occurred. Check the console.");
            console.log(response);

        });


    }// end load all blogs



}]); // end controller
