const express=require('express');
const passport=require('passport');
const router=express.Router();
const habbitracker=require('../controller/habbit_controller');
router.get('/tracker',passport.checkAuthenticated,habbitracker.mainhomepage);
router.post('/create',habbitracker.habbitcreate);
router.get('/destroy/:id',habbitracker.destroy);
router.post('/updatename',habbitracker.updatename);
router.post('/submit-form',habbitracker.tikchecks)
module.exports=router;