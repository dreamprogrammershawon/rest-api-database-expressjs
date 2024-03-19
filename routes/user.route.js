const { getAllUsers, createUser, getOneUsers, deleteUsers, updateUsers } = require('../controllers/user.controller');

const router = require('express').Router();



router.get('/',getAllUsers);
router.post('/',createUser);
router.get('/:id',getOneUsers);
router.delete('/:id',deleteUsers);
router.patch('/:id',updateUsers);



module.exports=router;