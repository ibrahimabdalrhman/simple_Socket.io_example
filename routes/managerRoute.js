const express=require('express');
const router=express.Router();
const {newManager, managerById}=require("../controllers/managerController")

router.post('/new-manager',newManager);
router.get('/:id',managerById);



module.exports=router;