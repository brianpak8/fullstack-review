const express = require('express');
const bodyParser = require('body-parser');
var helper = require('../helpers/github');
var db = require('../database/index');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
  console.log('!!!!!!!!!!!!!!', req.body, 'booooooo');
  helper.getReposByUsername(req.body.term, function () {
    console.log(req.body.term);
    res.end();
  });

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  //console.log('A wild request has arrived', req);
  //console.log('database query', db.find());
  db.find().then(function(data) {
    console.log('pppppppppppppppppppp', data);
    res.end(JSON.stringify(data));
  }).catch(function(err) {
    console.error(err);
  });
  // console.log(data);
  // res.end(data);
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
