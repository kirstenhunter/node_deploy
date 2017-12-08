angular.module('GameCtrl', []).controller('GameCtrl', function($scope, $http) {
    $scope.tagline = 'Nothing beats a pocket protector!';

})
.controller('GameCtrl', function($scope, $http) {
        $scope.formData = {};
        $http.get('/api/games')
                .success(function(data) {
			console.log(data);
                        $scope.games = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });
});
