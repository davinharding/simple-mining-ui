import React, { Component } from 'react';
import TopMiners from './components/TopMiners';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Crypto Dashboard</div>
        <SearchBar />
        <TopMiners />
      </div>
    );
  }
}

export default App;
