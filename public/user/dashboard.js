/* $Scope in Angular is the binding part of HTML and JavasScript */
/* Original Idea was to use Angular. */

// when a controller is made in AngularJS and $scope object should be as an argument 
// adding properties to $scope object the HTML will get access to these properties 
app.controller('user_dashboard', ['$scope','$location','$http','$timeout','$rootScope',
                '$location','$window','Upload',
                function($scope,$location,$http,$timeout,$rootScope,$location,$window,Upload) { {
        
                    $scope.loginshow=true; // login show true 
                    $scope.oka="default";
                    $scope.pageName="dashboard" // dashboard 
                    $http.get("session_user").then(function(response) // session user 

// promise - built in $q service
/* $location - parses the URL in the browser in the addresses bar and it makes it available to the application
    $http - takes one argument and generate and HTTP request and returns a promise (resolved) or rejected 
    $timeout - is a promise, resolved when delay and passed and timeout function, provided = executed 
    $window - reference to the browser's window object 
    $rootScope - builds a seperation for models/views - every application has a root scope */
// ending operators 
{})}}])