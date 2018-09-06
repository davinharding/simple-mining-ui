import React, { Component } from 'react';
import TopMiners from './components/TopMiners';
import SearchBar from './components/SearchBar';
import MiningMenu from './components/MiningMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Crypto Dashboard</div>
        <SearchBar />
        <MiningMenu />
        <TopMiners />
      </div>
    );
  }
}

export default App;
