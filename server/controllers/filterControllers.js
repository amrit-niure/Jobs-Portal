import Job from "../models/jobModel.js";

export const getByFilter = async (req, res) => {
  try {
    const company = req.body;
    console.log(company);
    const job = await Job.find(company); // Use req.body directly in the query
    res.status(200).json({ success: true, job });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// to retrieve jobs that satisfy at least one of the conditions provided in the request body (i.e., either the company or location matches)
export const getByFilters = async (req, res) => {
  try {
    const filters = req.body;
    console.log(filters);
    const query = {};

    // Build the query object with $or operator
    if (filters.company || filters.location) {
      query.$or = [];
      if (filters.company) {
        query.$or.push({ company: filters.company });
      }
      if (filters.location) {
        query.$or.push({ location: filters.location });
      }
    }

    const job = await Job.find(query);
    res.status(200).json({ success: true, job });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
