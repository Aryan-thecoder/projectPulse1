// Import express
const express = require("express")

// import middleware token
const verifyAdminToken = require("../middlewares/verifyAdminToken")

// import modules
const {
    getAllProjects,
    getProjectDetailsById,
    createProject
} = require("../controllers/admin.controller")

// create admin express application
const adminApp = express.Router()
adminApp.use(express.json())


// Route to GET all projects
adminApp.get('/get-projects',verifyAdminToken,getAllProjects)

// Route to GET all projects by project id
adminApp.get('/get-projects-by-id/:projectId',verifyAdminToken,getProjectDetailsById)

// Route to POST new project
adminApp.post('/create-project',verifyAdminToken,createProject)

// export
module.exports = adminApp