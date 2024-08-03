const mongoose = require("mongoose");

const CompanyListSchema = new mongoose.Schema({
  entity_type: { type: String },
  name: { type: String },
  category_code: { type: String },
  status: { type: String },
  founded_at: { type: String },
  homepage_url: { type: String },
  twitter_username: { type: String },
  description: { type: String },
  overview: { type: String },
  tag_list: { type: String },
  country_code: { type: String },
  state_code: { type: String },
  city: { type: String },
  region: { type: String },
  first_funding_at: { type: String },
  last_funding_at: { type: String },
  funding_rounds: { type: String },
  funding_total_usd: { type: String },
  first_milestone_at: { type: String },
  last_milestone_at: { type: String },
  milestones: { type: String },
  ROI: { type: String },
});

module.exports = mongoose.model("ListedCompany", CompanyListSchema);
