import React, { Component } from 'react';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TopMiners from './components/TopMiners';
import CurrentHashrate from './components/CurrentHashrate';
import PoolBalance from './components/PoolBalance';


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });

  

  class App extends Component {
    constructor() {
      super();
      this.state = {
        address: {avgHashrate: {h6: null}}
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async handleSubmit(event) {
      event.preventDefault();
      let address = await axios.get(`https://api.nanopool.org/v1/eth/user/${this.state.value}`);
          address = address.data.data
        this.setState({address}); 
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    render() {
        return (
          <div>
            <div>Crypto Dashboard</div>
            <form onSubmit={this.handleSubmit} className="container" noValidate autoComplete="off">
              <TextField
                        id="search"
                        label="Search by Address"
                        type="search"
                        className="textField"
                        margin="normal"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />
            </form>
            <PoolBalance getPoolBalance={this.state.address.balance}/>
            <TopMiners />
          </div>
        )}}


  
  export default withStyles(styles)(App);
