require('dotenv').config();
const app = require('./server');

 //modulo para la lectura de lso archivos tipo Jason
const { mongoose } = require('./database');
const Dwh = require('./models/Schema')


 ///obtengo la variable del puerto
app.listen(app.get('port'),() => {
  console.log('Server on port', app.get('port'));
});


////Me muestra lo insertado  en la URL indicada
  app.get('/api',(req,res)=>{
     Dwh.find({},(err,insertar) => {
      if(err) return res.status(500).send({message:`Error al realizar la peticion:${err}`})
      if(!insertar) return res.status(404).send({message:`No existen productos`})
       res.status(200).send({insertar})
   })
  });
   ///////////// Metodo Get para realizar busquedas por ID
   app.get('/api/:id',(req, res)=>{
     let insertarId = req.params.id
     
    Dwh.findById(insertarId,(err, insertar)=>{
      if(err) return res.status(500).send({message:`Error al realizar la peticion:${err}`})
      if(!insertar) return res.status(404).send({message:`El programa no existe`})

      res.status(200).send({insertar})
    })
   })

  /////metodo Post para insertar datos en el esquema creado
      app.post('/api/insertar',(req,res)=>{
      console.log('POST /api/insertar')
      console.log(req.body)

      let insertar = new Dwh() //Dwh es el nombre del esquema dado en Esquema.js
      insertar.numero = req.body.numero
      insertar.codigo = req.body.codigo
      insertar.linea = req.body.linea
      insertar.proceso = req.body.proceso
      insertar.dia = req.body.dia
      insertar.status = 1

      insertar.save((err,documentoRes)=> {
        if(err) res.status(500).send({message:`Error al salvar en la Base de datos ${err}`})
        else{
          res.status(200).send({insertar: documentoRes, status: 'exitoso'});
        }
      })
   })
  
   ////// permite actualizar pero el staus se devuelve null
   app.put('/api/insertar/:id',(req,res)=>{
     
      let updateID = req.params.id
      let update = req.body
      Dwh.findByIdAndUpdate(updateID, update,(err, actualizado) =>{
        if(err) res.status(500).send({message:`error al actualizar el producto: ${err}`})
        else{ 
        res.status(200).send({archivo: actualizado})
         }
      })

   })
   ///// metodo para Eliminar por ID
   app.delete('/api/eliminar/:id',(req,res)=>{
     let eliminarid = req.params.id
     Dwh.findById(eliminarid,(err, eliminar)=>{
       if(err) res.status(500).send({message:`error al borrar le producto: ${err}`})
       
        eliminar.remove(err =>{
          if(err) res.status(500).send({message:`error al borrar le producto: ${err}`})
          res.status(200).send({message:'El producto ha sido eliminado'})
        })
       
     })
   })

///////////////////pruebas de conexion
// app.get('/api/insertar',(req,res)=>{
//   res.send(200,{insertar:[]})
// })

// app.get('/api/insertar:insertarId',(req,res)=>{
   
// })

// app.post('/api/insertar',(req,res)=>{
//   console.log(req.body)
//   res.status(200).send({message:'El insertaro se ha recibido'})
// })

// app.put('/api/insertar/:insertarID',(req,res)=>{

// })

// app.delete('/api/insertar/insertarId',(req,res)=>{

// })

/////////////////creacion del Get para la Bd



////prueba de conexion con un mensaje en la url hola
// app.get('/hola',(req,res)=> {
//   res.send({message:'Hola Mundo'})
// })

// employeectrl.getEmployee = async(req , res) =>{
//   const employee = await Employee.findById(req.params.id);
//    res.json(employee);
// };

// app.set("view engine","jade");



