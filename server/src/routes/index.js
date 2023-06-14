const { Router } = require('express');
const countriesRoutes = require('./Country');
const activitiesRoutes = require('./Activity');
const router = Router();

router.use('/countries', countriesRoutes);
router.use('/', activitiesRoutes);

module.exports = router;
