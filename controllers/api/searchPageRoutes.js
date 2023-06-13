const express = require('express');
const router = express.Router();
require('dotenv').config();
const fetch = require('node-fetch');
const http = require('http');
const apiKey = process.env.USA_JOBS_API_KEY;

router.post('/', async (req, res) => {
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

    const fetchResponse = await fetch(url, options);

    if (!fetchResponse.ok) {
      throw new Error(`API request failed with status ${fetchResponse.status}`);
    }
    const data = await fetchResponse.json();
    res.json(data);
  } catch (error) {
    console.error('Error searching jobs:', error);
    res.sendStatus(500);
  }
});

module.exports = router;
