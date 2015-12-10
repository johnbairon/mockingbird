angular.module('starter.controllers', ['usuario'])

.controller('DashCtrl', function($scope, $state, UsuarioService) {
  $scope.token = location.search.substring(27); 
    if ($scope.token != '' && UsuarioService.getTokenGoogle() =='') {
     UsuarioService.setTokenGoogle($scope.token);
     $state.go('Autenticate');
    }
    if (UsuarioService.getTokenGoogle()==''){
    $state.go('login');   
    } 
})

.controller('SongsCtrl', function($scope, $ionicPopup, back_api,UsuarioService, $state) {
  
  if ( UsuarioService.getTokenGoogle() =='') {
     $state.go('login'); 
  } else{
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
}
})

.controller('RecommendationCtrl', function($state, $scope, back_api,UsuarioService) {
  if (UsuarioService.getTokenGoogle() =='') {
     $state.go('login'); 
  } else{

  back_api.allRecommendations().success(function(data) {
    $scope.recommends = data;
  });
}

})

.controller('RankingCtrl', function($scope, back_api, $state, UsuarioService) {
  if ( UsuarioService.getTokenGoogle() =='') {
     $state.go('login'); 
  } else{
  back_api.ranking().success(function(data) {
    $scope.ranking = data;
  });
}
})

.controller('AccountCtrl', function($scope, $state, UsuarioService) {
   if ( UsuarioService.getTokenGoogle() =='') {
     $state.go('login'); 
  }else{
  $scope.imagenPersonal = UsuarioService.getImagen();
  $scope.nombre = UsuarioService.getNombre();
  $scope.logout = function() {
    UsuarioService.setTokenGoogle('');
    UsuarioService.setImagen('');
    UsuarioService.setNombre('');
    var url="http://localhost:8100/";
    window.location.replace(url);
    $state.go('login');
  }
}
})


    // Funcion medinte la cual se envia la peticion a google para que solicite
    // al usuario permisos para acceder con si cuenta de google.
  .controller('LoginCtrl', function($scope, $state, UsuarioService) {
        $scope.login = function() {
        var scope = 'email';
        var client_id = '116421120632-otf7afrfqtfeiqlibtlatnou8964bge0.apps.googleusercontent.com';
        var redirect_uri = 'http://localhost:8100/';
        var response_type = 'code';
        var state = 'security_token';
        var access_type = 'offline';
        var approval_prompt = 'force';
        var url="https://accounts.google.com/o/oauth2/auth?scope="+
        scope+"&client_id="+client_id+"&redirect_uri="+redirect_uri+
       "&response_type="+response_type+"&state="+state+"&access_type="+
        access_type+"&approval_prompt="+approval_prompt;
        window.location.replace(url);
  
  }
});
