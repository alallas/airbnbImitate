const express=require("express");
const detailRoomController=require("../controllers/detailRoomController");

const router=express.Router();

router.get("/:id",detailRoomController.detailRoom_check_get)

module.exports = router;