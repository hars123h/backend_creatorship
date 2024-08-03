const CompanyDetail = require("../models/CompanyDetail");
const ListCompany = require("../models/CompanyList");

exports.getAllCompany = async (req, res) => {
  try {
    const company = await CompanyDetail.find().sort({ date: -1 });

    res.json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getCompanyDetail = async (req, res) => {
  try {
    const companyDetail = await ListCompany.findById(req.params.id);
    if (!companyDetail) {
      return res.status(400).send("Company Not Found");
    }
    res.json(companyDetail);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getAllListedCompany = async (req, res) => {
  try {
    const { letter, page = 1, limit = 10 } = req.query;

    // Set up query conditions
    const query = {};
    if (letter) {
      query.name = { $regex: `^${letter}`, $options: 'i' }; // Case-insensitive search
    }

    // Pagination calculation
    const skip = (page - 1) * limit;

    const data = await ListCompany.find(query)
    .skip(skip)
    .limit(parseInt(limit))
    .exec();

    const total = await ListCompany.countDocuments(query);


// {"data":["acquired","closed","ipo","operating"]}
    res.json({
      data,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
