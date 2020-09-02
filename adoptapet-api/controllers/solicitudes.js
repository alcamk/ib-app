/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

const Solicitud = require('../models/Solicitud')

function crearSolicitud(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var solicitud = new Solicitud(req.body)
  res.status(201).send(solicitud)
}

function obtenerSolicitud(req, res) {
  // Simulando dos usuarios y respondiendolos
  var solicitud1 = new Solicitud(1, 'Baco', '30/01/2020')
  var solicitud2 = new Solicitud(2, 'Mushu', '30/01/2020')
  res.send([solicitud1, solicitud2])
}

function modificarSolicitud(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var solicitud1 = new Solicitud(req.params.id, 'Baco', '30/01/2020')
  var modificaciones = req.body
  solicitud1 = { ...solicitud1, ...modificaciones }
  res.send(solicitud1)
}

function eliminarSolicitud(req, res) {
  res.status(200).send(`Solicitud ${req.params.id} eliminada`);
}

module.exports = {
    crearSolicitud,
    obtenerSolicitud,
    modificarSolicitud,
    eliminarSolicitud
}