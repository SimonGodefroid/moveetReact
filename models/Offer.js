var mongoose = require("mongoose");

var OfferSchema = new mongoose.Schema({
sector: String,
company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
jobDescription: String,
idealCandidateProfile: String,
priority:String,
startDate:Date,
salary:String,
location:String,
companyContact: String,
additionalInformation: String,
status: String
});

module.exports = mongoose.model("Offer", OfferSchema, "offers");