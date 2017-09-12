var mongoose = require("mongoose");

var CandidateSchema = new mongoose.Schema({

// company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
additionalInformation: String,
status: String
});

module.exports = mongoose.model("Candidate", CandidateSchema, "candidates");