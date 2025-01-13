const express=require('express');
const router=express.Router();
const {newAgent, showOrdersAssigned}=require("../controllers/agentController")

router.post('/new-agent',newAgent);
router.get('/:id',showOrdersAssigned);



module.exports=router;