const express=require("express");
const {createAccount}= require("../controllers");

const router=express.Router();

router.post("/account",createAccount);

module.exports={
    router
}