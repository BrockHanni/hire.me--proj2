const router = require('express').Router();
const userRoutes = require('./userRoutes');
const searchPageRoutes = require('./searchPageRoutes');

router.use('/users', userRoutes);
router.use('/searchPage', searchPageRoutes);

module.exports = router;
