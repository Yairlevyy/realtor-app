const {
    _signUp,
    _signIn,
    _getUserId,
    _changePassword,
    _uploadUserData,
    _updateUserData,
} = require('../models/users.models.js')

const bcrypt = require('bcryptjs');

// SignUp

const signUp = async (req,res) => {
    const {email,password} = req.body;
    try { 
        const hash_password = await hashPassword(password)
            try { 
                const data = await _signUp(email,hash_password);
                res.status(200).json({msg:'The account was successfuly created !',user_id:data[0].id})
            } catch (err) {
                console.log(err)
                res.status(404).json({msg:'Error occured, please try again'})
            }
    } catch (err) {
        console.log(err)
        res.status(404).json({msg:'Error occured, please try again'})
    }
};

// Function to encrypt the password

async function hashPassword(plainTextPassword) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
  return hashedPassword;
}

// SignIn

const signIn = async (req,res) => {
    const {email,password} = req.body;
    try { 
        const data = await _signIn(email);
        // check length of the array to verify that the email exist 
        if (data.length == 0) {
            res.status(404).json({msg:"Sorry, this email doesn't exist!"})
        }
        try {
            const isMatch = await comparePasswords(password,data[0].password)
            if (isMatch) {
                res.status(200).json({msg:'Successfuly login !',user_id:data[0].id})
            } else {
                res.status(404).json({msg:"Password wrong!"})
            }
        } catch (err) {
            console.log(err)
            res.status(404).json({msg:'Error occured, please try again'})
        }
    } catch (err) {
        console.log(err)
        res.status(404).json({msg:'Error occured, please try again'})
    }
};

// Function to check the password

async function comparePasswords(plainTextPassword, hashedPassword) {
  const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
  return isMatch;
};

// Function to get the user_id based on the email to display infos

const getUserId = async (email) => {
    const data = await _getUserId(email);
    return data[0].id;
}

// Function to change the password 

const changePassword = async (req,res) => {
    const {email,new_password} = req.body;
    try { 
        const hash_password = await hashPassword(new_password)
            try { 
                const data = await _changePassword(email,hash_password)
                res.status(200).json({msg:'The password was successfuly changed !'})
            } catch (err) {
                console.log(err)
                res.status(404).json({msg:'Error occured, please try again'})
            }
    } catch (err) {
        console.log(err)
        res.status(404).json({msg:'Error occured, please try again'})
    }
};

// Function to upload users informations

const uploadUserData = async (req,res) => {
    const {data} = req.body;
        try {
            const dataUploading = await _uploadUserData(data);
            res.status(200).json({msg:'The data was successfuly uploaded !'})
        } catch (err) {
            console.log(err)
            res.status(404).json({msg:'Error occured, please try again'})
        }
};

// Function to upload users data

const updateUserData = async (req,res) => {
    const {user_id,data} = req.body;
        try {
            const dataUploading = await _updateUserData(user_id,data);
            res.status(200).json({msg:'The data was successfuly updated !'})
        } catch (err) {
            console.log(err)
            res.status(404).json({msg:'Error occured, please try again'})
        }
};

module.exports = {
    signUp,
    signIn,
    getUserId,
    changePassword,
    uploadUserData,
    updateUserData,
}