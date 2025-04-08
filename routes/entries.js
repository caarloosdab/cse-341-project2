const express = require('express');
const router = express.Router();
const entriesController = require('../controllers/entries');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', entriesController.getAll);
router.get('/:id', entriesController.getSingle);
router.post('/', isAuthenticated, entriesController.createEntry);
router.put('/:id', isAuthenticated, entriesController.updateEntry);
router.delete('/:id', isAuthenticated, entriesController.deleteEntry);

module.exports = router;
