
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
    res.redirect('/app')
};

appCtrl.listaapp = async(req , res) =>{
 const formulario = await form.find().lean();//se agrega .lena() para que lo pase a formato JSON
 res.render('users/form', {formulario})
};

appCtrl.renderEditForm = async (req, res) =>{
    const edit = await form.findById(req.params.id).lean();
    res.render('partials/editar',{edit});
    
}

appCtrl.UpdateForm =async (req,res) =>{
    const{codigo, grupo, proceso, ejecucion } = req.body
   await form.findByIdAndUpdate(req.params.id,{codigo:codigo,grupo:grupo, proceso:proceso, ejecucion:ejecucion}).lean();
    res.redirect('/app')
}

appCtrl.DeleteForm =async (req,res) =>{
    await form.findByIdAndDelete(req.params.id)
    res.redirect('/app')
}
module.exports = appCtrl;

