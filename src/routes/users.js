const Router = require('express');
const userController = require('../controllers/user');

const userRoutes = Router();

// Generate REST API routes for the users module
userRoutes.post('', userController.create);
userRoutes.get('', userController.list);
userRoutes.put('/:id', userController.update);
userRoutes.delete('/:id', userController.delete);

module.exports = userRoutes;