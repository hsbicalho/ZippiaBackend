require('dotenv').config();
'use strict';
const express = require("express");
const {Job} = require("./models");
const cors = require('cors')
const app = express();



/* app.use(cors()); */

app.use(express.json());

app.get('/',cors(), async (_req,res) =>{
  try {
    const result = await Job.findAll();
    res.status(200).json(result);

  } catch (e){
    console.log(e.message);
    res.status(500).json({message: 'Something went wrong'})
  }
})

app.post('/',cors(), async (req,res) => {
  try {
    const { companyName, jobTitle, description, location } = req.body;
    const newJob = await Job.create({ companyName, jobTitle, description, location });

    return res.status(201).json(newJob);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
})

const PORT = process.env.DB_PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
