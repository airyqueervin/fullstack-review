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

    this.getRepos = this.getRepos.bind(this);

  }

  search (term) {
    axios.get(`https://api.github.com/search/repositories?q=${term}`)
    .then(repoData => {
      repoData.data.items.forEach(repo => {
        console.log('repo', repo)
        this.state.repos.push(repo);
        console.log(this.state.repos)
      });
      this.setState(this.state.repos.push(repoData));
      console.log(repos);
    }).catch(err => {
      console.error(err);
    })
    .then(() =>{
      console.log(`${term} was searched`);
      this.getRepos();
      // axios.post('/repos/import', term)
      // .then(({data}) => {
      //   alert('This is data', data)
      //   this.setState(this.state.repos.push(data));
      // })
    })
    .catch(err => {
      console.error(err);
    })

  }

   getRepos() {
    axios.get('/api/repos')
      .then(({ data }) => {
        this.setState({
          repos: data
        });
      })
      .catch(err => {
        console.error("Fucking thing failed", err);
      });
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