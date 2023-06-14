const { Router } = require('express');
const router = Router();
const { addActivity, getActivities } = require('../controllers/activityController');


router.post('/activities', addActivity);
router.get('/activities/', getActivities);


module.exports = router;