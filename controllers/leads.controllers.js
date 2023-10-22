const {
    _insertLeadsData,
    _getLeads,
    _deleteLeads
} = require('../models/leads.models.js')

const insertLeadsData = async (req,res) => {
    const {user_id,data} = req.body;
    try {
        const uploadingData = await _insertLeadsData(user_id,data);
        res.status(200).json({msg:'The data was successfuly uploaded !'})
    } catch (err) {
        console.log(err)
        res.status(404).json({msg:'Error occured, please try again'})
    }
};

const getLeads = async (req,res) => {
    const agent_id = Number(req.params.agentId);
    try {
        const data = await _getLeads(agent_id)
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(404).json({msg:'Error occured, please try again'})
    }
};

const deleteLeads = async (req,res) => {
    const {leads_id} = req.body;
    try {
        const data = await _deleteLeads(leads_id)
        res.status(200).json({msg:'The leads was successfuly deleted !'})
    } catch (err) {
        console.log(err)
        res.status(404).json({msg:'Error occured, please try again'})
    }
};

module.exports = {
    insertLeadsData,
    getLeads,
    deleteLeads
}
