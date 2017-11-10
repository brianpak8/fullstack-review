import React from 'react';

const Repo = (props) => (
  <div>
    <span>{props.watchers} </span>
    <span>{props.owner} </span>
    <a href={props.linker}>{props.linker}</a>
  </div>
)

export default Repo;
