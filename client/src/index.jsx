import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoItems from './components/RepoItems.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    var context = this;
    $.ajax({
      url: '/repos',
      method: 'POST',
      success: function(data) {
        console.log('success');
        $.ajax({
          url: '/repos',
          method: 'GET',
          success: function(data) {
            data = JSON.parse(data);
            console.log(data);
            context.setState({repos: data});
          },
          error: function(err) {
            console.log(err);
          }
        })
      },
      data: JSON.stringify({
        'term': term
      }),
      contentType: 'application/json',
      error: function(err) {
        console.log(err);
      },


    });
    console.log(`${term} was searched`);
    // TODO
  }
  componentDidMount() {
    var context = this;

    $.ajax({
      url: '/repos',
      method: 'GET',
      success: function(data) {
        console.log(typeof data);
        data = JSON.parse(data);
        console.log(typeof data);
        console.log(data);
        console.log(Array.isArray(data));
        context.setState({repos: data});
      },
      error: function(err) {
        console.log(err);
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
      <RepoItems repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
