const express = require("express");
const { Router } = require("express");
const authController = require("../controllers/auth");

const router = express.Router();

router.get("/",authController.isLoggedIn,(req,res)=>{
    res.render("index",{
        user: req.user
    });
});

router.get("/register",(req,res)=>{
    res.render("register");
});

router.get("/login",(req,res)=>{
    res.render("login");
});

router.get("/profile", authController.isLoggedIn,(req,res)=>{
    if(req.user){
        res.render("profile",{
            user : req.user
        });
    }
    else{
        res.redirect("login");
    }    
});

router.get("/edit",authController.isLoggedIn,(req,res)=>{
    if(req.user){
        res.render("edit",{
            user : req.user
        });    
    }
    else{
        res.redirect("login");
    }
});

//added for additional bootstrap
router.get("/additionalbs",(req,res)=>{
    res.render("additionalbs");
});

// router.get("/edit",(req,res)=>{
//     res.render("edit");
// });




module.exports = router;