//// establecemos objetos qeu contengan las rutas URL
const indexctrl = {};

indexctrl.renderIndex =(req , res) =>{
    res.render('index')
};

indexctrl.renderAbout =(req , res) =>{
    res.render('about')
};

module.exports = indexctrl;