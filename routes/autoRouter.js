const Router = require("express");
const autoController = require("../controllers/autoController");

const router = new Router();

router.get("/:id", autoController.getOne)
router.post("/query", autoController.get)
router.post("/", autoController.create)

module.exports = router;