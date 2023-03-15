// Import express
const express = require("express")

// import middleware token
const verifyGdoHeadToken = require("../middlewares/verifyGdoHeadToken")
// import modules
const {
    getAllProjects,
    getProjectDetailsById,
    assignEmployeesToProject,
    updateEmployeesOfProject,
    deleteEmployeesFromProject

} = require("../controllers/gdoHead.controller")

// create gdoHeadApp express application
const gdoHeadApp = express.Router()
gdoHeadApp.use(express.json())


// Route to GET all projects by gdo id
gdoHeadApp.get('/get-projects/:gdoId',verifyGdoHeadToken,getAllProjects)

// Route to GET all projects by project id and gdo id
gdoHeadApp.get('/get-projects-by-id/projectId/:projectId/gdoId/:gdoId',verifyGdoHeadToken,getProjectDetailsById)

// Route to POST assign employees
gdoHeadApp.post('/assign-employees',verifyGdoHeadToken,assignEmployeesToProject)

// Route to Update employees
gdoHeadApp.put('/update-employees/:id',verifyGdoHeadToken,updateEmployeesOfProject)

// Route to DELETE employees
gdoHeadApp.delete('/delete-employees/:id',verifyGdoHeadToken,deleteEmployeesFromProject)

// export
module.exports = gdoHeadApp