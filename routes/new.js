const { Router } = require('express');
const router = Router();
const controller = require('../controllers/new');

router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;
