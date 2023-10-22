const express = require('express')
const {
    signUp,
    signIn,
    changePassword,
    uploadUserData,
    updateUserData,
} = require('../controllers/users.controllers.js')

const users_router = express.Router();

users_router.post('/signup', signUp)
users_router.post('/signin', signIn)
users_router.put('/changepassword', changePassword)
users_router.post('/uploaduserdata', uploadUserData)
users_router.put('/updateuserdata', updateUserData)

module.exports = users_router;