//frontend

//todos los documentos recibidos desde le backend

/*let registros = [];
let filteredReg = registros.slice();

function getRegistros(){
    //consultar api
    //almacenar en registros
}
// [1,2,3]
function filtrarPorStatus1(){
    filteredReg = registros.filter(d => {
        return d.status == 1;
    });
}
*/
//funcion de guardar
function guardar(){
     const _num = document.getElementById("numero").value;
     const _cod = document.getElementById("codigo").value;
     const _linea = document.getElementById("linea").value;
     const _proceso = document.getElementById("proceso").value;
     const _dia = document.getElementById("dia").value;

    const fila="<tr><td>"+_num+"</td><td>"+_cod+"</td><td>"+_linea+"</td><td>"+_proceso+"</td><td>"+_dia+"</td><td><select name='Status'><option value='No_Iniciado' selected>No Iniciado</option> <option value='En_progreso'>En Progreso</option> <option value='Completado'>Completado</option></select></td>"+"<td><button id='btn_borrar' onclick='borrar(this)'>Borrar</button></td></tr>";
    const btn = document.createElement("tr");    	btn.innerHTML=fila;     document.getElementById("tablita").appendChild(btn);
}

//funcion de borrar
function borrar(t){
    const td = t.parentNode;
    const tr = td.parentNode;
    const table = tr.parentNode;
    table.removeChild(tr);
}

