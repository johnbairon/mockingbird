angular.module('starter.services', [])

.factory('back_api', function($http) {
  // Might use a resource here that returns a JSON array

  var base = "https://server-mockingbird.herokuapp.com";
  //var base = "http://localhost:3001";

  return {

    allSongs: function() {
      return $http.get(base + '/songs', {
        method: 'GET'
      });
    },

    ranking: function() {
      return $http.get(base + '/last_week_recommendations', {
        method: 'GET'
      });
    },

    votar: function(song) {
      return $http.post(base + '/recommendation', {
        method: 'POST',
        params: {
          song: song
        }
      });
    },

    allRecommendations: function() {
      return $http.get(base + '/recommendations', {
        method: 'GET'
      });
    }


  };
});
