'use strict';

angular.module('session.services', [])
  .factory('ApiSession', function($http) {
    var base = 'http://spinnerbank-api-external.herokuapp.com';

    return {


      //Servicio mediante el cual se envia el token de seguridad a SpinnerBank Backend para 
      // que desde este se realice la autenticacion del usuario
      obtenerTokenApi: function(codigoGoogle) {
        return $http.get(base + '/v1/oAuth2/accessToken4', {
          method: 'get',
          params : {
            'code':codigoGoogle
          }
        });
      },

      //Servicio encargado de obtener la informacion del usuario logeado en el 
      // sistema mediante el Token de acceso que provee el Api Backend
      obtenerInfoUsuario: function(TokenApi) {
        return $http.get(base + '/v1/oAuth2/userInfo', {
          method: 'get',
          params : {
            'access_token':TokenApi
          }
        });
      }
    };
  });
