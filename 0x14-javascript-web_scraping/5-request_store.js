#!/usr/bin/env node
const request = require('request');
const fs = require('fs');

request(process.argv[2], (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(process.argv[3], body, 'utf8', (error) => {
      if (error) {
        console.log(error);
      }
    });
  }
});
