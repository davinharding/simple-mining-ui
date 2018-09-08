import React, { Component } from 'react';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TopMiners from './components/TopMiners';
import MiningMenu from './components/MiningMenu';


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
        address: {avgHashrate: {h6: null}},
        address2: [{amount: null}]
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      Array.prototype.sum = function () {
        let total = 0
        for ( let i = 0; i < this.length; i++ ) {
            total += this[i].amount
        }
        return total
    }
    }
    
    async handleSubmit(event) {
      event.preventDefault();
      let address = await axios.get(`https://api.nanopool.org/v1/eth/user/${this.state.value}`);
          address = address.data.data;
        this.setState({address}); 
      let address2 = await axios.get(`https://api.nanopool.org/v1/eth/payments/${this.state.value}`);
          address2 = address2.data.data;
        this.setState({address2});
      let projection = await axios.get(`https://api.nanopool.org/v1/eth/approximated_earnings/${this.state.address.avgHashrate.h6}`);
        projection = projection.data.data;
        this.setState({projection});
        // console.log(projection)
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
            <MiningMenu 
              getHashrate={this.state.address.avgHashrate.h6} 
              getPoolBalance={this.state.address.balance} 
              getGlobalEarnings={this.state.address2.sum()} 
              // getProjections={this.state.projection} 
            /> 
            <TopMiners />
          </div>
        )}}


  
  export default withStyles(styles)(App);
