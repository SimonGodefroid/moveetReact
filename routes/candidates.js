const express = require("express");
const router = express.Router();
const request = require("request");
const candidateController = require("../controllers/candidate");
const passportConfig = require("../config/passport");

// routes with views
//router.get("/create", candidateController.getCreatecandidate); // get create candidate route
//router.get("/edit/:id", candidateController.getUpdatecandidate); // get update candidate route

// routes for CRUDs
router.get("/", candidateController.index);
router.post("/", candidateController.createcandidate); // create candidate route
router.get("/:id", candidateController.readcandidate); // read candidate route
router.post("/:id", candidateController.updatecandidate); // update
//router.delete("/:id", candidateController.deletecandidate); // delete candidate route

module.exports = router;
