/* $Scope in Angular is the binding part of HTML and JavasScript */
/* Original Idea was to use Angular. */

// when a controller is made in AngularJS and $scope object should be as an argument 
// adding properties to $scope object the HTML will get access to these properties 
app.controller('user_animals', ['$scope','$location','$http','$timeout','$rootScope',
                '$location','$window','upload',
                function($scope,$location,$http,$timeout,$rootScope,$location,$window,upload) {
// promise - built in $q service
/* $location - parses the URL in the browser in the addresses bar and it makes it available to the application
    $http - takes one argument and generate and HTTP request and returns a promise (resolved) or rejected 
    $timeout - is a promise, resolved when delay and passed and timeout function, provided = executed 
    $window - reference to the browser's window object 
    $rootScope - builds a seperation for models/views - every application has a root scope*/

    $scope.loginshow=true; // login true 
    $scope="default";
    $scope.pageName="Animal" // animal 
        $http.get("session_user").then(function(response) {// session user 


    // location 
    a=$location.path().split("/")
    id=a[a.length-1] // array length 
    data={id:id}
       
    // post $http - refer to comment above 
    $http.post('/user_selected_dog', data).then(function(response){
        $scope.name=response.data.name // name 
        $scope.age=response.data.age // age 
        $scope.animaltype=response.data.animaltype // animal type 
        $scope.breed=response.data.breed // breed
        $scope.weight=response.data.weight // weight 
        $scope.selectedAnimal=response.data // selected animal 
    })

    // save info form 
    $scope.saveInfo=function(form){
        if(form.$valid){
        data={
            name: $scope.name, // name 
            age: $scope.age, // age 
            weight: $scope.weight, // weight 
            animaltype: $scope.animaletype, // animal type
            breed: $scope.breed, // breed 
            id: id // id
    }  

    // process save info passing data 
    $scope.proccessSaveInfo=true
    $http.post('/user_selected_animals', data).then(function(response){
            $scope.proccessSaveInfo=false;
    $scope.successSaveInfo=true;
        $timeout(function(){
            $scope.successSaveInfo=false;
        },2000) // 20000 authorization
    })

}

    },function err(){ // error 
        $location.path("/login") // login 

// ending operators - should be organized better 
};})},]) 
