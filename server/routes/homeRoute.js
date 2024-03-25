const express=require("express");
const homeRoomController=require("../controllers/homeRoomController");

const router=express.Router();

router.get("/home",homeRoomController.homeRoom_check_get)

module.exports = router;