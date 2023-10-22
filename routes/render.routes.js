const express = require('express')
const renderProfile = require('../controllers/render.controllers.js')

const render_router = express.Router();

render_router.get('/:userId',renderProfile)

module.exports = render_router;
