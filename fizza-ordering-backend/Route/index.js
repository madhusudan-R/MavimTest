const router = require('express').Router();

const addUserController = require('../Components/User');
const orderListController = require('../Components/OrderList')

router.post('/register', addUserController.userReg );
router.post('/login', addUserController.userLogin);

router.get('/getAllOrders', orderListController.getOrders);
router.post('/addorders', orderListController.addOrders);
router.delete('/deleteOrders/:orderId', orderListController.deleteOrders);

module.exports= router;