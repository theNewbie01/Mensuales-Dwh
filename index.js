
const bodyParser = require('body-parser'); //modulo para la lectura de lso archivos tipo Jason
const express = require("express"); 


const app = express();

const { mongoose } = require('./conexion');

app.set('port', process.env.PORT || 3000); //se configura el puerto 3000

app.listen(app.get('port'),() => {                 ///se llama al puerto
  console.log('Server on port', app.get('port'));
});

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/insertar',(req,res)=>{
  res.send(200,{insertar:[]})
})

app.get('/api/insertar:insertarId',(req,res)=>{
   
})

app.post('/api/insertar',(req,res)=>{
  console.log(req.body)
  res.status(200).send({message:'El producto se ha recibido'})
})

app.put('/api/insertar/:insertarID',(req,res)=>{

})

app.delete('/api/insertar/insertarId',(req,res)=>{

})

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



/////funcion de guardar
//   function guardar(){
   
//     const _num = document.getElementById("numero").value;
//     const _cod = document.getElementById("codigo").value;
//     const _linea = document.getElementById("linea").value;
//     const _proceso = document.getElementById("proceso").value;
//     const _dia = document.getElementById("dia").value;

//     const fila="<tr><td>"+_num+"</td><td>"+_cod+"</td><td>"+_linea+"</td><td>"+_proceso+"</td><td>"+_dia+"</td><td><select name='Status'><option value='No_Iniciado' selected>No Iniciado</option> <option value='En_progreso'>En Progreso</option> <option value='Completado'>Completado</option></select></td>"+"<td><button id='btn_borrar' onclick='borrar(this)'>Borrar</button></td></tr>";

//     const btn = document.createElement("tr");
//    	btn.innerHTML=fila;
//     document.getElementById("tablita").appendChild(btn);
    

// }
// ///////////funcion de borrar
// function borrar(t)
//     {
//         const td = t.parentNode;
//         const tr = td.parentNode;
//         const table = tr.parentNode;
//         table.removeChild(tr);
//     }
 
