// public/js/services/GameService.js
angular.module('GameService', []).factory('Game', ['$http', function($http) {

    return {
        // call to get all games
        get : function() {
            console.log("Getting all games")
            return $http.get('/api/games');
        },

                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(gameData) {
            return $http.post('/api/games', gameData);
        },

        // call to DELETE a game
        delete : function(id) {
            return $http.delete('/api/games/' + id);
        }
    }       

}]);

