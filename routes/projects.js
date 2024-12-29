const express = require('express');
const Project = require('../models/project');
const router = express.Router();

// Add a new project
router.post('/projects', async (req, res) => {
    const { title, description, image, link } =req.body;
    const newProject = new project({ title, description, image, link });
    await newProject.save();
    res.json(newProject);
});

// Fetch all projects
router.get('projects', async (req, res) => {
    const projects = await project.find();
    res.json(projects);
});

module.exports = router;