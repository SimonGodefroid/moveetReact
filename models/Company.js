var mongoose = require("mongoose");

var CompanySchema = new mongoose.Schema({

// company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
additionalInformation: String,
status: String
});

module.exports = mongoose.model("Company", CompanySchema, "companies");