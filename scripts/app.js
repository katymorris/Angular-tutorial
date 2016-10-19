angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService){

// This line below
    $scope.helloConsole = dataService.helloConsole;

    dataService.getTodos(function(response) {
        console.log(response.data);
        $scope.todos = response.data
    });
})
.service('dataService', function($http) {

    this.helloConsole = function() {
      console.log('This is hello console service!');
    }

    this.getTodos = function(callback) {
        $http.get('mock/todos.json').then(callback)
    }
});