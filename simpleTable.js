var app = angular.module('simpleTable', []);
app.controller('tableController', function($scope, $http) {
    $scope.reverseSort = false;
    $scope.orderByField = "";
    $scope.employees = [{
            "name": "Joe",
            "age": 30,
            "salary": 2000,
            "title": "Engineer",
            "row": 1
        },
        {
            "name": "Nancy",
            "age": 22,
            "salary": 1800,
            "title": "Assistant",
            "row": 2
        },
        {
            "name": "Grey",
            "age": 38,
            "salary": 2800,
            "title": "Director",
            "row": 3
        },
        {
            "name": "Janet",
            "age": 25,
            "salary": 1500,
            "title": "Support",
            "row": 4
        },
        {
            "name": "Paul",
            "age": 28,
            "salary": 4000,
            "title": "Manager",
            "row": 5
        },
        {
            "name": "Joe",
            "age": 30,
            "salary": 2000,
            "title": "Engineer",
            "row": 6
        },
        {
            "name": "Wright ",
            "age": 38,
            "salary": 3000,
            "title": "Assistant",
            "row": 7
        },
        {
            "name": "Sahoo",
            "age": 38,
            "salary": 2800,
            "title": "Director",
            "row": 8
        },
        {
            "name": "Jolin",
            "age": 25,
            "salary": 1780,
            "title": "Support",
            "row": 9
        },
        {
            "name": "Paul 2",
            "age": 28,
            "salary": 4000,
            "title": "Manager",
            "row": 10
        },
        {
            "name": "Joe",
            "age": 30,
            "salary": 2400,
            "title": "Developer",
            "row": 11
        },
        {
            "name": "Peter",
            "age": 22,
            "salary": 1800,
            "title": "Assistant",
            "row": 12
        },
        {
            "name": "Smith",
            "age": 38,
            "salary": 2800,
            "title": "Director",
            "row": 13
        },
        {
            "name": "Jeff",
            "age": 25,
            "salary": 1890,
            "title": "Support",
            "row": 14
        },
        {
            "name": "Adam",
            "age": 28,
            "salary": 3800,
            "title": "Manager",
            "row": 15
        }
    ];


    // order by function: 

});