describe('Back_Api tests.', function() {

  // Arrange
  var counter;

  beforeEach(function() {
    counter = 0;
  });

  it('Prueba. Incrementa valor variable', function() {

    // Act
    counter++;

    // Assert
    expect(counter).toEqual(1);

  })

  it('Prueba. Disminuye valor variable', function() {

    // Act
    counter--;

    // Assert
    expect(counter).toEqual(-1);
  })

});

describe('Service Tests.', function() {

  // Arrange
  beforeEach(module('starter.services'));
  var name = '';


  it('Debe estar definido un servicio para recuperar todas las canciones', function() {

    // Act and assert
    inject(function(back_api) {
      expect(back_api.allSongs()).not.toBe(null);
    });
  });

  it('Debe haber un servicio para traer el ranking de canciones', function() {

    // Act and assert
    inject(function(back_api) {
      expect(back_api.ranking()).not.toBe(null);
    });
  });

  it('Debe estar definida función para recuperar canciones recomendadas', function() {

    // Act and assert
    inject(function(back_api) {
      expect(back_api.allRecommendations()).not.toBe(null);
    });
  });

  it('Se verifica para realizar post que permite votar', function() {

    // Act and assert
    inject(function(back_api) {
      expect(back_api.votar(name)).not.toBe(null);
    });
  });

});
