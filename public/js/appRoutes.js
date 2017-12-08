// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$gameProvider', function($routeProvider, $gameProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/game.html',
            controller: 'GameCtrl'
        });

    $gameProvider.html5Mode(true);

}]);
