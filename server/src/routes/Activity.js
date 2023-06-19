const { Router } = require("express");
const router = Router();
const {
  addActivities,
  getActivities,
} = require("../controllers/activityController");

router.post("/activities", addActivities);
router.get("/activities/", getActivities);

module.exports = router;
