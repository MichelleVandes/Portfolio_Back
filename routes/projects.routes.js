const router = require("express").Router();
const projectCtrl = require("../controllers/projects");

router.get("/", projectCtrl.allPjts);
router.get("/:_id", projectCtrl.findOnePjt);
router.post("/newPjt", projectCtrl.newPjt);
router.put("/:_id", projectCtrl.updatePjt);
router.delete("/:_id", projectCtrl.deletePjt);

module.exports = router;
