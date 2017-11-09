const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({

  id: {
    type: Number,
    unique: true
  },
  owner: String,
  watchers: Number,
  html_url: String
  // TODO: your schema here!
});

let Repo = mongoose.model('Repo', repoSchema);
// var r = new Repo({id: 3, owner: 6, watchers: 8});
// r.save();

let save = (repos) => {
  repos.forEach(function(repo) {
    let repoToSave = new Repo({id: repo.id, owner: repo.owner.login, watchers: repo.watchers, html_url: repo.html_url});
    repoToSave.save(function(err, repoToSave) {
      if (err) {
        console.log('error', err);
      }
      repoToSave;
    });
    //repoToSave.save({id: repo.id, owner: repo.owner.login, watchers: repo.watchers});
    // repoToSave.findOneAndUpdate({owner: repo.owner.login}, repoToSave, {upsert: true});
  })
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}
//  db.restaurants.find().sort( { "borough": 1, "address.zipcode": 1 } )
let find = () => {
  Repo.find().sort({watchers: -1}).limit(25).exec(function(err, result) {
    if (err) {
      console.log('error', err);
    }
    console.log('HEYYYYYYYYYYYY LOOOOOOOOOK', result);
    return result;
  })
};


module.exports.save = save;
module.exports.find = find;
