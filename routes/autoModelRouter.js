const Router = require("express");
const autoModelController = require("../controllers/autoModelController");

const router = new Router();

router.post("/", autoModelController.create)
router.get('/:brand', autoModelController.getByBrand)
router.get("/", autoModelController.get)

module.exports = router;