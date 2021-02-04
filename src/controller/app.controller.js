
const appCtrl= {};

appCtrl.renderAppForm =(req, res) =>{
    res.render('partials/form')
};

appCtrl.createNewapp =(req, res) =>{
    console.log(req.body)
    res.send('elemento creado')
};

appCtrl.listaapp = (req , res) =>{
    res.send('Lista de archivos')
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

