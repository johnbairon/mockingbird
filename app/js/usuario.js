'use strict';

angular.module('usuario', [])

/**
	Servicio donde se va a almacenar la informacion del usuario en la session
*/
.service('UsuarioService', function () {
	/**
	Token que devuelve el servicio de google
	*/
	var tokenGoogle = '';

	/**
	Token que devuelve el servicio del API External
	*/
	var access_token = '';

	/**
	Informacion personal del usuario
	*/
	var usuario = {};

  /**
  Imagen de perfil del usuario
  */
  var imagen  = '';

  /**
  Nombre del usuario
  */
  var nombre = '';

  

	/**
   * @ngdoc method
   * @name setTokenGoogle
   * @description Setea el token de google que se asigna al usuario
   * 
   * @param {String} tokenUser Token asignado al usuario
   */
  function setTokenGoogle(tokenUser) {
    tokenGoogle = tokenUser;
  }

  /**
   * @ngdoc method
   * @name  getToken
   * @description Devuelve el token de google asignado al usuario
   * 
   * @return {String} Token de google asignado al usuario
   */
  function getTokenGoogle() {
    return tokenGoogle;
  }

  /**
   * @ngdoc method
   * @name setAccess_token
   * @description Setea el token del suario en la API EXTERNAL
   * 
   * @param {String} tokenUser Token asignado al usuario
   */
  function setAccess_token(tokenUser) {
    access_token = tokenUser;
  }

  /**
   * @ngdoc method
   * @name  getAccess_token
   * @description Devuelve el token del API EXTERNAL del usuario
   * @return {String} Token del API asignado al usuario
   */
  function getAccess_token() {
    return access_token;
  }

  /**
   * @ngdoc method
   * @name setUsuario
   * @description Setea la informacion personal del usuario desde el  API EXTERNAL
   * 
   * @param {Object} usuario Informacion del usuario
   */
  function setUsuario(usuario) {
    usuario = usuario;
  }

  /**
   * @ngdoc method
   * @name  getUsuario
   * @description Devuelve la informacion personal del usuario
   * @return {Object} Informacion personal del usuario
   */
  function getUsuario() {
    return usuario;
  }

  function getImagen() {
    return imagen;
  }

  function setImagen(im) {
     imagen = im;
  }

  function getNombre() {
    return nombre;
  }

  function setNombre(nom) {
     nombre = nom;
  }

  return{
  	setTokenGoogle : setTokenGoogle,
  	getTokenGoogle : getTokenGoogle,
  	setAccess_token : setAccess_token,
  	getAccess_token : setAccess_token,
  	setUsuario : setUsuario,
  	getUsuario : getUsuario,
    setImagen : setImagen,
    getImagen : getImagen,
    setNombre : setNombre,
    getNombre : getNombre
  };

});