// Import express
const express = require("express")

// import middleware token
const verifyProjectManagerToken = require("../middlewares/verifyProjectManagerToken")

// import modules
const {
    getAllProjects,
    getProjectDetailsById,
    createProjectUpdates,
    updateProjectUpdates,
    deleteProjectUpdates,
    RiaseProjectConcern,
    updateProjectConcerns,
    deleteProjectConcerns

} = require("../controllers/projectManager.controller")

// create projectManagerApp express application
const projectManagerApp = express.Router()
projectManagerApp.use(express.json())

// Route to GET all projects by project manager id
projectManagerApp.get('/get-projects/:projectManagerId',verifyProjectManagerToken,getAllProjects)

// Route to GET all projects by project id and project manager id
projectManagerApp.get('/get-projects-by-id/projectId/:projectId/projectManagerId/:projectManagerId',verifyProjectManagerToken,getProjectDetailsById)

// Route to POST project updates
projectManagerApp.post('/create-project-updates',verifyProjectManagerToken,createProjectUpdates)

// Route to UPDATE project updates
projectManagerApp.put('/update-project-updates/:id',verifyProjectManagerToken,updateProjectUpdates)

// Route to DELETE project updates
projectManagerApp.delete('/delete-project-update/:id',verifyProjectManagerToken,deleteProjectUpdates)

// Route to POST project concerns
projectManagerApp.post('/create-project-concern',verifyProjectManagerToken,RiaseProjectConcern)

// Route to UPDATE project concerns
projectManagerApp.put('/update-project-concern/:id',verifyProjectManagerToken,updateProjectConcerns)

// Route to DELETE project concerns
projectManagerApp.delete('/delete-project-concern/:id',verifyProjectManagerToken,deleteProjectConcerns)

// exports
module.exports = projectManagerApp