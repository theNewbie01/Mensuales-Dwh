const { Router } = require("express");
const router = Router();

// definimos las rutas que vienen desde app.controler
const {
  renderAppForm,
  createNewapp,
  listaapp,
  renderEditForm,
  UpdateForm,
  DeleteForm,
} = require("../controller/app.controller");

////new
router.get("/app/add", renderAppForm);

router.post("/app/add-new", createNewapp);

///get

router.get("/app", listaapp);

// edit

router.get("/app/edit/:id", renderEditForm);

router.put("/app/edit/:id", UpdateForm);

//delete

router.delete("/app/delete/:id", DeleteForm);

module.exports = router;
