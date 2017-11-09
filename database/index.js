const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  owner: Number,
  watchers: Number
  // TODO: your schema here!
});

let Repo = mongoose.model('Repo', repoSchema);


let save = (repos) => {
  repos.forEach(function(repo) {
    let repoToSave = new Repo({id: repo.id, owner: repo.owner.login, watchers: repo.watchers});
    repo.findOneAndUpdate({owner: repo.owner.login}, repoToSave, {upsert: true});
  })
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;
