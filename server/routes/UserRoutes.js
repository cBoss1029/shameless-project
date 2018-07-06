let express =  require('express');
const router = express.Router();
let {list,show,create,update,remove} = require( '../controllers/UserControllers');
router.get('/users', list); //Whole array
router.get('/user/:id', show); // Single item
router.post('/users', create);
router.put('/user/:id', update);
router.delete('/user/:id', remove);
module.exports =  router;