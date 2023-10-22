const db = require('../config/database.js')

// insert data from the lead form

const _insertLeadsData = (agent_id,data) => {
    return db('leads').insert(data).where({agent_id});
}

const _getLeads = (agent_id) => {
    return db('leads').select('*').where({agent_id});
}

const _deleteLeads = (id) => {
    return db('leads').where({id}).del();
}

module.exports = {
    _insertLeadsData,
    _getLeads,
    _deleteLeads
}