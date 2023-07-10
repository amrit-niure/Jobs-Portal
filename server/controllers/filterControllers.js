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
