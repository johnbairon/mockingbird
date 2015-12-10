angular.module('starter.controllers', ['usuario'])

.controller('DashCtrl', function($scope, $state, UsuarioService) {
  if (UsuarioService.getTokenGoogle()==''){
    $state.go('login'); 
  }
  $scope.token = location.search.substring(27);

  console.log('token: '+$scope.token);

 
  if ($scope.token != '' && UsuarioService.getNombre() =='') {
     UsuarioService.setTokenGoogle($scope.token);
     $state.go('tab.dash'); 
  } 
})

.controller('SongsCtrl', function($scope, $ionicPopup, back_api) {

  back_api.allSongs().success(function(data) {
    $scope.songs = data;
  });

  $scope.votar = function(song) {

    back_api.votar(song).success(function(data) {
      $ionicPopup.alert({
           title: 'Voto registrado exitosamente',
           template: 'Usted a recomendado la canción ' + song.name
         });
    });

  };

})

.controller('RecommendationCtrl', function($scope, back_api) {


  back_api.allRecommendations().success(function(data) {
    $scope.recommends = data;
  });

})

.controller('RankingCtrl', function($scope, back_api) {

  back_api.ranking().success(function(data) {
    $scope.ranking = data;
  });

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
