   const mongoose = require('mongoose')

   /////////////////codigo para la conexion con la bd de Mongoose, instalar: npm install mongoose


   mongoose.connect('mongodb://localhost/Dwh', {useNewUrlParser: true, useUnifiedTopology: true})
   .then(db => console.log('DB is connect'))
   .catch(err => console.error(err));

   module.exports = mongoose;               
 

