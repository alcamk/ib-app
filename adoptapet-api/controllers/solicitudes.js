/*  Archivo controllers/solicituds.js
 *  Simulando la respuesta de objetos Solicitud
 *  en un futuro aquí se utilizarán los modelos
 */

const mongoose = require('mongoose')
const Usuario = mongoose.model('Usuario')
const Solicitud = mongoose.model('Solicitud')
const Mascota = mongoose.model('Mascota')
mongoose.set('useFindAndModify', false)

function crearSolicitud(req, res, next) {
  Mascota.findById(req.query.mascota_id, async (err, mascota) => {
    if(!mascota || err) {
      return res.sendStatus(401)
    }
    if(mascota.estado === 'adoptado') {
      return res.sendStatus('La mascota ya ha sido adoptada')
    }

    const solicitud = new Solicitud()
    solicitud.mascota = req.query.mascota_id
    solicitud.anunciante = mascota.anunciante
    solicitud.solicitante = req.usuario.id
    solicitud.estado = 'pendiente'
    solicitud.save()
    .then(async s => {
      await Usuario.findOneAndUpdate({_id: req.usuario.id}, {tipo: 'anunciante'})
      res.status(201).json(s)
    })
    .catch(next)
  }).catch(next)
}

function obtenerSolicitud(req, res, next) {
  if (!req.params.id) {
    // sin :id, solo enlistaremos las solicitudes dónde el usuario es anunciante o solicitante
    Solicitud.find({ $or: [{ solicitante: req.usuario.id }, { anunciante: req.usuario.id }] }).then(solicitudes => {
      res.send(solicitudes)
    }).catch(next)
  } else {
    // Al obtener una solicitud individual con el :id poblaremos los campos necesarios
    Solicitud.findOne({ _id: req.params.id, $or: [{ solicitante: req.usuario.id }, { anunciante: req.usuario.id }] })
      .then(async (solicitud) => {
        // añadimos información sobre la mascota
        await solicitud.populate('mascota').execPopulate()
        if (solicitud.estado === 'aceptada') {
          // Si la solicitud ha sido aceptada, se mostrará la información de contacto
          await solicitud.populate('anunciante', 'username nombre apellido bio foto telefono email').execPopulate()
          await solicitud.populate('solicitante', 'username nombre apellido bio foto telefono email').execPopulate()
          res.send(solicitud)
        } else {
          res.send(solicitud)
        }
      }).catch(next)
  }
}

function modificarSolicitud(req, res) {
  // simulando un solicitud previamente existente que el solicitud utili
  var solicitud1 = new Solicitud(1, 4, '4/06/2020', 3, 8, 'pendiente')
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