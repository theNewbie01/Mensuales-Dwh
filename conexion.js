   const mongoose = require('mongoose')
 
   mongoose.connect('mongodb://localhost/Dwh', {useNewUrlParser: true})
   .then(db => console.log('DB is connect'))
   .catch(err => console.error(err));

   module.exports = mongoose;               
 

