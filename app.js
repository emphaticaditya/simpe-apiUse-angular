var myApp = angular.module("myModule",[]);
myApp.controller("myController", function ($scope, $http) {
   $http.get('https://infinite-depths.herokuapp.com/coins')
       .then(function (response) {
        $scope.allCoins = response.data;
    });
    // $scope.searchBox;
    $scope.searchBtn = function (searchBox) {
        $('.loadersmall').show();
        $('#modal-table').hide();
        $http.get('https://infinite-depths.herokuapp.com/forecast?code=' + searchBox)
            .then(function (response) {
                $('.loadersmall').hide();
                $('#modal-table').show();
                $scope.searchCoin = response.data.forecast;
            }, function (response) {
                window.alert("Please type right currency name!!");

            });
    }
});