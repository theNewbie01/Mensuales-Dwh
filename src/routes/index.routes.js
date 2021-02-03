const {Router} = require('express')
const router = Router();

///importamos los objetos creados en index.controller
const{renderIndex,renderAbout } = require('../controller/index.controlles')

router.get('/',renderIndex );
router.get('/about', renderAbout);


module.exports = router;
