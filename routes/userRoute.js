const express = require('express');
const { getUser, createUser, updateUser, getUsrById, delUser } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.route('/').get(getUser)

userRouter.route('/:id').get( getUsrById
   )

userRouter.route('/').post(createUser)

userRouter.route('/:id').put(updateUser 
   )

userRouter.route('/:id').delete (delUser)
 module.exports = userRouter;