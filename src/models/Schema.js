////creacion de un Esquema para la bd

const mongoose = require('mongoose');

const {Schema} = mongoose;

const Dhw = new Schema({
     numero:{type:Number},
     codigo:{type:Number, required:false},
     linea:{type:Number, required:true,min:[1,"ingrese entre 1 y 3"], max:[3,"la linea no existe"]},
     proceso:{type:String, required:true, maxlenght:[100,"proceso demasia largo"], uppercase:true },
     dia:{type:Number, required:true},
     status: {type: Number}
});

module.exports = mongoose.model('Dwh', Dhw);