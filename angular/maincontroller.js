var myApp = angular.module('myApp', ['ngRoute']);
myApp.controller('BindingCode', ['$http', function($http) {

    //create a context
    var main = this;
    this.pageHeading;
    // i knew the result is going to be array, so i declared an empty array to initialize
    this.matchlist = [];
    this.rounds = [];
    this.years = ['2015-16', '2016-17'];
    this.matches = [];

    this.teamDetails;

    this.currentYear = null;
    this.loadMatchForYear = function(year) {
        main.currentYear = year;
        this.loadAllMatches();
    }
    this.loadAllMatches = function() {

        if (main.currentYear == null) {
            main.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
        } else {
            main.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/' + main.currentYear + '/en.1.json';
        }
        $http({
            method: 'GET',
            url: main.baseUrl
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response.data);

            main.pageHeading = response.data.name;
            main.matchlist = response.data;
            main.rounds = response.data.rounds;
            for (i = 0; i < main.rounds.length; i++) {
                main.matches = main.rounds[i].matches;
            }
            console.log(main.matches);

            /*main.blogs = response.data.data;
             console.log(main.blogs);
             */
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("some error occurred. Check the console.");
            console.log(response);

        });
    }
    this.currentCategory = null;

    function setCurrentCategory(match) {
        main.currentCategory = match;
    }
    this.setCurrentCategory = setCurrentCategory;

    this.LoadTeamDetails = function(team) {

        console
        //main.teamDetails =
    }


}]);