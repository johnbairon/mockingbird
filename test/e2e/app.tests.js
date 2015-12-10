

describe('Debe haber una tab para las canciones recomendadas', function() {

  browser.get('/#/tab/dash');

    it('Debe ser posible visualizar las canciones recomendadas', function() {
        expect(element(by.css('a[icon-on=ion-ios-star]')).isPresent()).toBe(true);
        element(by.css('a[icon-on=ion-ios-star]')).click();
    });

    it('La lista de canciones recomendadas debe ser mayor a 0', function() {
      element.all(by.repeater('rec in recommends')).count().then(function(count) {
        expect(count).toBeGreaterThan(0);
      });
    });

});

describe('Probando ranking de canciones', function() {

  browser.get('/#/tab/dash');

  it('Debe ser posible dar click en el ranking de canciones', function() {
      expect(element(by.css('a[icon-on=ion-ios-checkmark-outline]')).isPresent()).toBe(true);
      element(by.css('a[icon-on=ion-ios-checkmark-outline]')).click();
  });

  it('El ranking debe tener al menos 1 canción', function() {
    element.all(by.repeater('r in ranking')).count().then(function(count) {
      expect(count).toBeGreaterThan(0);
    });
  });

  it("La canción debe tener un nombre", function() {

    element.all(by.repeater('r in ranking')).then(function(ranking) {
       var titleElement = ranking[0].element(by.binding('r.name'));
       expect(titleElement.getText()).toEqual('Sonido bestial');
    });
  });

  it("La canción debe tener una puntuación", function() {

    element.all(by.repeater('r in ranking')).then(function(ranking) {
       var cElement = ranking[0].element(by.binding('r.cantidad'));
       expect(cElement.getText()).toEqual('Puntuación: 90');
    });
  });


  it("La canción debe tener el nombre del artista que la interpreta", function() {

    element.all(by.repeater('r in ranking')).then(function(songs) {
       var titleElement = songs[0].element(by.binding('r.artist'));
       expect(titleElement.getText()).toEqual('Artista: Richie Ray & Bobby Cruz');
    });
  });

});

describe('Probando la carga de canciones', function() {

  browser.get('/#/tab/dash');

  it('Debe ser posible hacer click en la tab de Canciones', function() {
      expect(element(by.css('a[icon-on=ion-ios-book]')).isPresent()).toBe(true);
      element(by.css('a[icon-on=ion-ios-book]')).click();
  });

  it('La lista de canciones debe ser mayor a 0', function() {
    element.all(by.repeater('song in songs')).count().then(function(count) {
      expect(count).toBeGreaterThan(0);
    });
  });

  it("La canción debe tener un nombre", function() {

    element.all(by.repeater('song in songs')).then(function(songs) {
       var titleElement = songs[0].element(by.binding('song.name'));
       expect(titleElement.getText()).toEqual('Morena ven');
    });
  });

  it("La canción debe tener el nombre del artista que la interpreta", function() {

    element.all(by.repeater('song in songs')).then(function(songs) {
       var titleElement = songs[0].element(by.binding('song.artist'));
       expect(titleElement.getText()).toEqual('Artista: Los Hermanos Rosario');
    });
  });

  it('Debe ser posible votar por una canción', function() {
    element.all(by.repeater('song in songs')).then(function(songs) {
      expect(songs[0].element(by.css('.button')).isPresent()).toBe(true);
      songs[0].element(by.css('.button')).click();
    });

  });

  it('Debe salir un mensaje de confirmación de la votación', function() {

    var popup = element(by.css('.popup-container.popup-showing.active'));
    expect(popup.isDisplayed()).toBeTruthy();
  });

});
