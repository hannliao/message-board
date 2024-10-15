const { Router } = require('express');
const router = Router();
const controller = require('../controllers/open');

router.get('/:id', controller.get);

module.exports = router;
