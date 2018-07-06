let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/BundleControllers');
router.get('/bundles', list); //Whole array
router.get('/bundle/:id', show); // Single item
router.post('/bundles', create);
router.put('/bundle/:id', update);
router.delete('/bundle/:id', remove);
module.exports =  router;