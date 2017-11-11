const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      //accept header is optional but recommended per github
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, function(err, res, resBody) {
    if (err) {
      console.log('ERROR!', err)
    }
    // console.log('This is the response', res);
    console.log('This is the responseBody', resBody);
    db.save(JSON.parse(resBody)).then(callback);
  });

}

module.exports.getReposByUsername = getReposByUsername;
