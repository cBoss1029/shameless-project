let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/OrderControllers');
router.get('/orders', list); //Whole array
router.get('/order/:id', show); // Single item
router.post('/orders', create);
router.put('/order/:id', update);
router.delete('/order/:id', remove);
module.exports =  router;