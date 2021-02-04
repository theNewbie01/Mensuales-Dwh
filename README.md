## proyecto para los mensuales de Dwh-Movil


## DESCRIPCION

Se creara una aplicación donde se puedan validar los procesos mensuales de la operacion y asi saber cuales estan completados , en progreso, sin ejecutar

### Instalaciones
*npm init ---- instala package.json
*npm install express --Framework nos ayuda a crear un servidor
*connect-flash -- comunicacion entre paginas para leer mensajes
*bcryptjs --- modulo de cifrado que ayuda a ejecutar algoritmos
*express-handlebars -- crear vistas y archivos html para enviar
*express-session -- guarda sesiones en el servidor
*method -override -- permite enviar metodos put y delete desde el formulario
*mongoose -- permite manejar la bd de MongoDb
*passport -- permite auntenticar al usuario con login
*passport-local
*dotenv -D -- permite utilizar variables de entorno
*nodemon -D -- reiniciar el servidor automaticamente al realizar un cambio
*handlebars-D --

## carpetas 

*src -- index.js , server.js, database
*/config -- configurar algunos modulos
*/controller -- funciones cuando un usuario visita una ruta del servidor
*/helpers - codigo adicional handlebars
*/models - almacena modelos de datos como schemas
/*public - archivos publicos al que le navegador puede acceder libremente
/*routes - Url o rutas que genera nuestro servidor
/*views -- archivos html que se envian al navegador al cliente


## conf. package.json

*  "start": "node src/index.js", --npm start
*   "dev": "nodemon src/index.js"--npm run dev

## conf. mongoDb

   const mongoose = require('mongoose')
 
   mongoose.connect('mongodb://localhost/Dwh', {useNewUrlParser: true, useUnifiedTopology: true})
   .then(db => console.log('DB is connect'))
   .catch(err => console.error(err));

   module.exports = mongoose;               
 
 ## conf. handlebars
const exphbs = require('express-handlebars');

 app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine','.hbs');

## body.parser
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true})); // cada vez que llegan datos de un formulario lo convierte en formato Json
app.use(bodyParser.json()) 

## static files 

 app.use(express.static(path.join(__dirname , 'public')))

 ## routes

 app.use(require('./routes/index.routes'));
