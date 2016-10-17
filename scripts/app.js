angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService){

// This line below
    $scope.helloConsole = dataService.helloConsole;

    $scope.learningNgChange = function () {
        console.log("Input changed!");
    };

  $scope.todos = [
    {"name": "Water lawn"},
    {"name": "Walk the dog"},
    {"name": "Get the mail"},
    {"name": "Sleep"},
    {"name": "Clean the car"},
    {"name": "Clean the house"},
  ]

})
.service('dataService', function(){

    this.helloConsole = function() {
      console.log('This is hello console service!');
    }
});