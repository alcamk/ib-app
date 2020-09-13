const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({//Esta parte del esquema tendra el esquema de una archivo de paciente
    title: {String, required: Boolean},//nombre, edad, peso, altura, fecha de nacimiento, etc.
    description: {String, required: Boolean},
  
});

module.exports = mongoose.model('Task', TaskSchema);