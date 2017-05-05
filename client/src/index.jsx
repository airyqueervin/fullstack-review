import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    axios.get('https://api.github.com/orgs/octokit/repos')
    .then(data => {
      console.log(data);
    }).catch(err => {
      console.error(err);
    })
    .then(() =>{
      console.log(`${term} was searched`);
      axios.post('/repos/import', term)
      .then(({data}) => {
        alert('This is data', data)
        this.setState(this.state.repos.push(data));
      })
    })
    .catch(err => {
      console.error(err);
    })

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));