'use strict';

/**
describe('Controlador de canciones.', function() {

  var scope, back_api;
  var mockBack_Api = {};
  var controller;

  beforeEach(module('starter.controllers'));

  beforeEach(function() {

    module('starter.services', function($provide) {
      $provide.value('back_api', mockBack_Api);
    });

    inject(function($q) {
      mockBack_Api.data = [
        {
          "_id":"5664a859e4b00d59f0b723d7",
          "name":"Morena ven",
          "artist":"Los Hermanos Rosario",
          "genre":"Merengue"
        },
        {
          "_id":"5664a884e4b00d59f0b723d9",
          "name":"Gitana",
          "artist":"Willie Colón",
          "genre":"Salsa"
        }
      ];

      mockBack_Api.allSongs = function() {
        var defer = $q.defer();

        defer.resolve(this.data);

        return defer.promise;
      };

      mockBack_Api.votar = function(song) {
        var defer = $q.defer();

        var item = {
          song: song
        };

        this.data.push(item);
        defer.resolve(item);

        return defer.promise;
      };
    });

  });

  beforeEach(inject(function($controller, $rootScope, _back_api_) {

    scope = $rootScope.$new();
    back_api = _back_api_;

    controller = $controller('SongsCtrl', {
      $scope: scope,
      back_api: back_api
    });

    scope.$digest();
  }));


  it('Debe contener todas las canciones al principio', function() {

    scope.songs = mockBack_Api.allSongs();

    expect(scope.songs).toEqual([
      {
        "_id":"5664a859e4b00d59f0b723d7",
        "name":"Morena ven",
        "artist":"Los Hermanos Rosario",
        "genre":"Merengue"
      },
      {
        "_id":"5664a884e4b00d59f0b723d9",
        "name":"Gitana",
        "artist":"Willie Colón",
        "genre":"Salsa"
      }
    ]);
  });

  it('Debe crear nuevas canciones y añadirlas a la lista', function() {
    // We simulate we entered a new library name
    scope.newItemSong = {
              "_id":"7774a859e4b00d59f0b723d7",
              "name":"Blanca vete",
              "artist":"Los Primos Perdidos",
              "genre":"Bachata"
            };

    // And that we clicked a button or something
    scope.votar();

    scope.$digest();

    var lastLibrary = scope.songs[scope.songs.length - 1];

    expect(lastLibrary).toEqual({
      "_id":"7774a859e4b00d59f0b723d7",
      "name":"Blanca vete",
      "artist":"Los Primos Perdidos",
      "genre":"Bachata"
    });
  });
});

**/

describe('Testing controlador canciones', function() {

  // Arrange
  var scope = {};
  var controller;
  var back_api;

  beforeEach(module('starter.controllers'));
  beforeEach(module('starter.services'));

  beforeEach(inject(function($controller, $rootScope, $injector) {

    back_api = $injector.get('back_api');
    scope = $rootScope.$new();
    controller = $controller('SongsCtrl', {
      $scope: scope,
      back_api: back_api
    });
  }));

  // Act and assert
  it('La variable songs no debe estar definida', function() {

    back_api.allSongs();

    expect(scope.songs).not.toBeDefined();
  });

});

describe('Testing controlador ranking', function() {

  // Arrange
  var scope = {};
  var controller;
  var back_api;
  beforeEach(module('starter.controllers'));
  beforeEach(module('starter.services'));

  beforeEach(inject(function($controller, $rootScope, $injector) {

    back_api = $injector.get('back_api');
    scope = $rootScope.$new();
    controller = $controller('RankingCtrl', {
      $scope: scope,
      back_api: back_api
    });
  }));

  // Act and assert
  it('La variable ranking no debe estar definida', function() {
    expect(scope.ranking).not.toBeDefined();
  });

});

describe('Testing controlador Recomendaciones', function() {

  // Arrange
  var scope = {};
  var controller;
  var back_api;
  beforeEach(module('starter.controllers'));
  beforeEach(module('starter.services'));

  beforeEach(inject(function($controller, $rootScope, $injector) {

    back_api = $injector.get('back_api');
    scope = $rootScope.$new();
    controller = $controller('RecommendationCtrl', {
      $scope: scope,
      back_api: back_api
    });
  }));

  // Act and assert
  it('La lista de recomendaciones todavia no debe estar definida', function() {

    expect(scope.recommends).not.toBeDefined();
  });

});


describe('Testing account', function() {

  // Arrange
  var scope = {};
  var controller;
  beforeEach(module('starter.controllers'));

  beforeEach(inject(function($controller, $rootScope) {

    scope = $rootScope.$new();
    controller = $controller('AccountCtrl', {
      $scope: scope
    });
  }));

  // Act and assert
  it('Debe tener la variable settings asignada', function() {
    expect(scope.settings).toBeDefined();
  });

});

/**
describe('Test controlador de canciones', function() {

  // Arrange
  var scope = {};
  var controller;
  var back_api;

  beforeEach(module('starter.controllers'));

  beforeEach(inject(function($controller, $rootScope, _back_api_) {

    back_api = _back_api_
    scope = $rootScope.$new();
    controller = $controller('SongsCtrl', {
      $scope: scope,
      back_api: back_api
    });
  }));

  it('Debe estar definida la función que permite votar por una canción', function() {
    expect(scope.votar).toBeDefined();
  });

});
**/
