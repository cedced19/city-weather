angular.module('CityWeather', []).controller('CityWeatherCtrl', function ($scope, $http) {
        
        $scope.panel = false;

        $scope.search = function () {
            var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.city + "&mode=json&units=metric&cnt=10&appid=13ccf3475608870d407b43ca09bc032f";
            $scope.loader = true;
            $http.get(url).success(function (response) {
                $scope.panel = true;
                $scope.loader = false;
                $scope.weather = response;
            }).error(function () {
                $scope.loader = false;
                $scope.error = true;
            });
        };

        $scope.expand = function (e) {
            var $elem = $(e.currentTarget);
            $elem.addClass("row_active").siblings().removeClass('row_active');
        };

        $scope.Math = Math;
});