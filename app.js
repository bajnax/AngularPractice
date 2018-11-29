var myApp = angular.module('myAngApp',[]);

myApp.controller('angContr', function($scope, $http) {
    $http.get("https://api.github.com/users/bajnax/repos?")
    .then(function mySuccess(response) {
        $scope.repos = response.data;
    }, function myError(response) {
        $scope.repos = response.statusText;
    });
});