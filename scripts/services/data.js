angular.module('todoListApp')
.service('dataService', function($http) {

    this.helloConsole = function() {
      console.log('This is hello console service!');
    }

    this.getTodos = function(callback) {
        $http.get('mock/todos.json').then(callback)
    }

    this.deleteTodo = function(todo) {
        console.log("has been deleted")
        //other logic
    };

    this.saveTodos = function(todo) {
        console.log("has been saved")
        //other logic
    }
});