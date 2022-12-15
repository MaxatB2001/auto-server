const Router = require("express");
const router = new Router();
const autoRouter = require("./autoRouter")
const brandRouter = require("./brandRouter")
const autoModelRouter = require("./autoModelRouter")

router.use('/auto', autoRouter)
router.use('/brand', brandRouter)
router.use('/autoModel', autoModelRouter)

module.exports = router;