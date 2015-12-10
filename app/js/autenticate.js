  'use strict';

  angular.module('LoginGoogle', ['session.services', 'usuario'])
   //Controlador encargo de realizar la autenticacion del usuario en el sistema
  .controller('AutenticateCtrl', function($scope, ApiSession, UsuarioService, $state) {

         
      // Llamado al servicio de ApiSession External que devuelve en token de acceso 
      // para realizar las consultas de los demas servicios
      ApiSession.obtenerTokenApi(UsuarioService.getTokenGoogle())
        .success(function(data) {
            var tokenApi = data.access_token;
            UsuarioService.setAccess_token(tokenApi);
            // Llamado al Servicio que retorna la informacion del Usuario logeado
            // en el sistema.
            ApiSession.obtenerInfoUsuario(tokenApi)
              .success(function(data) {
               UsuarioService.setImagen(data.picture);
               UsuarioService.setNombre(data.given_name);
               //var url="http://localhost:8100/";
               //window.location.replace(url);
               $state.go('tab.dash');

              }).error(function (data, status) {
                  console.log(data);
              })
        }).error(function (data, status) {
            console.log(data);
      });
      });


