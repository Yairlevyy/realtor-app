const express = require('express');
const {
    insertLeadsData,
    getLeads,
    deleteLeads
} = require('../controllers/leads.controllers.js')

const leads_router = express.Router();

leads_router.post('/insertdata',insertLeadsData)
leads_router.get('/getall/:agentId',getLeads)
leads_router.delete('/delete',deleteLeads)

module.exports = leads_router;
