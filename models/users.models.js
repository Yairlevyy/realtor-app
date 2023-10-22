const db = require('../config/database.js')

// sign up

const _signUp = (email,password) => {
    return db('users').insert({email,password},["id"]);
}

// sign in

const _signIn = (email) => {
    return db('users').select('id','email','password').where({email})
}

// get user_id based on email

const _getUserId = (email) => {
    return db('users').select('id').where({email})
}

// change password

const _changePassword = (email,password) => {
    return db('users').where({email}).update({password});
}

// upload data

const _uploadUserData = (data) => {
    return db('user_info').insert(data)
}

// update data

const _updateUserData = (user_id,data) => {
    return db('user_info').where({user_id}).update(data)
}

// get user data based on id

const _getUserData = (user_id) => {
    return db('user_info').where({user_id}).select('*')
}

module.exports = {
    _signUp,
    _signIn,
    _getUserId,
    _changePassword,
    _uploadUserData,
    _updateUserData,
    _getUserData
}

