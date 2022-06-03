const router = require("express").Router();
const projectsController = require("../controllers/ projectsControllers");
const multer = require("../middleware/multer-config")

router.get("/", projectsController.findProjects);
router.get("/:_id", projectsController.findOneProject);
router.post("/newPjt", multer, projectsController.createProject);
router.put("/:_id", projectsController.updateProject);
router.delete("/:_id", projectsController.deleteProject);

module.exports = router;
