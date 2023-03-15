// Import express
const express = require("express")

// import middleware token
const verifySuperAdminToken = require("../middlewares/verifySuperAdminToken")

// import modules
const {
    roleAssignment,
    getAllSpecialUsers,
    updateSpecialUsers,
    deleteSpecialUsers

} = require("../controllers/superAdmin.controller")

// create superAdminApp express application
const superAdminApp = express.Router()
superAdminApp.use(express.json())

// Route to UPDATE roles of special users
superAdminApp.put('/put-role',verifySuperAdminToken,roleAssignment)

// Route to GET all special users
superAdminApp.get('/get-all-special-users',verifySuperAdminToken,getAllSpecialUsers)

// Route to UPDATE details of special users
superAdminApp.put('/update-special-user/:empId',verifySuperAdminToken,updateSpecialUsers)

// Route to DELETE special users
superAdminApp.delete('/delete-special-user/:empId',verifySuperAdminToken,deleteSpecialUsers)

// export
module.exports = superAdminApp