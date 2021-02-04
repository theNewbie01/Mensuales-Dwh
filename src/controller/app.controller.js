
const appCtrl= {};
const form = require('../models/Schema')


appCtrl.renderAppForm =(req, res) =>{
    res.render('partials/form')
};

appCtrl.createNewapp = async (req, res) =>{
    const{ codigo, grupo, proceso, ejecucion } = req.body;
   const newform = new form ({
        codigo:codigo,
        linea:grupo,
        proceso: proceso,
        dia:ejecucion
    }
)
   await newform.save();
    res.send('elemento creado')
};

appCtrl.listaapp = async(req , res) =>{
 const formulario = await form.find().lean();//se agrega .lena() para que lo pase a formato JSON
 res.render('users/form', {formulario})
};

appCtrl.renderEditForm = (req, res) =>{
    res.send('render edit form')
}

appCtrl.UpdateForm =(req,res) =>{
    res.send('update app')
}

appCtrl.DeleteForm =(req,res) =>{
    res.send(' Delete form')
}
module.exports = appCtrl;

