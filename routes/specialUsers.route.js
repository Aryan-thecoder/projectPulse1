// Import express
const express = require("express")

// import modules
const {
    registerSpecialUser,
    LoginSpecialUser,
    forgotPassword,
    resetPassword

} = require("../controllers/specialUsers.controller")

// create specialUsersApp express application
const specialUsersApp = express.Router()
specialUsersApp.use(express.json())

// Route to POST Employee Registration
specialUsersApp.post('/register-special-user',registerSpecialUser)

// Route to POST Employee login details
specialUsersApp.post('/special-user-login',LoginSpecialUser)

// Route to POST Forget password
specialUsersApp.post('/forgot-password',forgotPassword)

// Route to POST Reset password
specialUsersApp.post('/reset-password/:email',resetPassword)

// export
module.exports = specialUsersApp