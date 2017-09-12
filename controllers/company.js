const Company = require("../models/Company");
const User = require("../models/User");

// GET /
exports.index = (req, res) => {
  Company.find({}).exec(function(err, companies) {
    if (err) {
      console.log("An error occurred" + err);
    } else {
      res.json({
        companies: companies
      });
    }
  });
};

// POST / CREATE
exports.createCompany = (req, res, next) => {
  const newCompany = new Company(req.body);
  Company.findOne({"siren":req.body.siren},(err, existingCompany) => {
    if (err) {
      return next(err);
    }
    if (existingCompany) {
      return res.json({
        error: "Une entreprise avec ce Siren existe déjà"
      });
    }
    newCompany.save((err, company) => {
      if (err) {
        return next(err);
      }
      res.status(200);
      res.json(newClient);
    });
  });
};

// GET /:id READ
exports.readCompany = (req, res) => {
  Company.findById(req.params.id).exec(function(err, company) {
    if (err) {
      console.log("An error occurred" + err);
    } else {
      res.json({
        company: company
      });
    }
  });
};

// POST /:id UPDATE
exports.updateCompamy = (req, res, next) => {
  Company.findById(req.params.id, (err, company) => {
    if (err) {
      return next(err);
    }

    for (var i in company) {
      company[i] = req.body[i] || company[i];
    }
    company.save(err => {
      if (err) {
        return next(err);
      }
      res.status(200);
      res.json({ msg: "company updated !", data: company });
    });
  });
};
