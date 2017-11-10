import React from 'react';
import Repo from './Repo.jsx';

const RepoItems = (props) => (
  <div>
    <h4> Top 25 Most Watched Repos </h4>
    Watchers Owner Link
    {props.repos.map((repo)=> {
      return <Repo linker={repo.html_url} owner={repo.owner} watchers={repo.watchers} key={repo.id}/>
    })}
  </div>
)

export default RepoItems;
