const express = require('express');
const router = express.Router();
const apiKey = process.env.USA_JOBS_API_KEY;
const http = require('http');

router.get('/', (req, res) => {
  try {
    const { searchQuery, location, salary } = req.query;

    const host = 'data.usajobs.gov';
    const userAgent = 'gibby.eidem@gmail.com';
    const authKey = apiKey;

    const url = `https://${host}/api/search?Keyword=${searchQuery}&LocationName=${location}&SalaryBucket=${salary}`;

    const options = {
      url: url,
      method: 'GET',
      headers: {
        "Host": host,
        "User-Agent": userAgent,
        "Authorization-Key": authKey
      }
    };

    request(options, (error, response, body) => {
      if (error) {
        console.error('Error searching jobs:', error);
        res.sendStatus(500);
        return;
      }

      const data = JSON.parse(body);
      res.json(data);
    });
  } catch (error) {
    console.error('Error searching jobs:', error);
    res.sendStatus(500);
  }
});

module.exports = router;
