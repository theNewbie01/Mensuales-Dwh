const express = require ('express');
const path = require('path')
const bodyParser = require('body-parser');

////Inicializacion del servidor
const app = express();

//Settings -- lo que quiero que haga express basado en modulos

app.set('port', process.env.PORT || 3000); //indico nombre de la variable y el valor
app.set('views', path.join,(__dirname + 'views')) // dejo una configuracion para ue la carpeta pueda ser vista desde cualqueir S.O

///Middlewars -- funciones que se ejecutan a medida que van llegando peticiones
app.use(bodyParser.urlencoded({extended:true})); // cada vez que llegan datos de un formulario lo convierte en formato Json
app.use(bodyParser.json()) 
//Global Variables-- varares globales


//Routes -- rutas

 app.get('/', (req,res)=>{
     res.send('Pagina Inicial');
})
// Static Files -- archivos al que el navegador puede acceder sin necesidadde autenticacion

 app.use(express.static(path.join(__dirname + 'public')))


module.exports = app;