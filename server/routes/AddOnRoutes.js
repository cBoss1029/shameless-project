let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/AddOnControllers');
router.get('/addOns', list); //Whole array
router.get('/addOn/:id', show); // Single item
router.post('/addOns', create);
router.put('/addOn/:id', update);
router.delete('/addOn/:id', remove);
module.exports =  router;