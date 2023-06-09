const express = require('express');
const router = express.Router();
require('dotenv').config();
const request = require('request');

const apiKey = process.env.USA_JOBS_API_KEY;

router.get('/', (req, res) => {
  try {
    const { searchQuery, location, salary } = req.body;

    const host = 'data.usajobs.gov';
    const userAgent = 'gibby.eidem@gmail.com';
    const authKey = apiKey;

    const url = `https://${host}/api/Search?Keyword=${searchQuery}&LocationName=${location}&SalaryBucket=${salary}`;

    const options = {
      url: url,
      method: 'GET',
      headers: {
        "Host": host,
        "User-Agent": userAgent,
        "Authorization-Key": authKey
      }
    };

    request(options, (error, body) => {
      if (error) {
        console.error('Error searching jobs:', error);
        res.sendStatus(500);
        return;
      }

      const data = JSON.parse(body);
      console.log(data);
      res.json(data);
    });
  } catch (error) {
    console.error('Error searching jobs:', error);
    res.sendStatus(500);
  }
});

module.exports = router;
