const router = require('express').Router();
const userRoutes = require('./userRoutes');
const searchPageRoutes = require('./searchPageRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/searchPage', searchPageRoutes);

module.exports = router;
