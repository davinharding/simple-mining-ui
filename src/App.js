import React, { Component } from 'react';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TopMiners from './components/TopMiners';
import MiningMenu from './components/MiningMenu';
import './css/App.css'
import LoadingWheel from './components/LoadingWheel';
import { render } from 'react-dom';



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
        address: {balance: 0, avgHashrate: {h6: 0}},
        address2: [{amount: 0}],
        projection: {
          hour: {dollars: 0, coins: 0},
          day: {dollars: 0, coins: 0},
          week: {dollars: 0, coins: 0},
          month: {dollars: 0, coins: 0}
          },
        tabDisplay: "none",
        runCheck: null,
        loading: false

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
       this.setState({loading: true}, async () => {
      let address = await axios.get(`https://api.nanopool.org/v1/eth/user/${this.state.value}`);
      address = address.data.data;
      let runCheck = address.hashrate;
      this.setState({runCheck})
      this.setState({address}); 
      let address2 = await axios.get(`https://api.nanopool.org/v1/eth/payments/${this.state.value}`);
      address2 = address2.data.data;
        this.setState({address2: address2});
      let projection = await axios.get(`https://api.nanopool.org/v1/eth/approximated_earnings/${this.state.address.avgHashrate.h6}`);
      projection = projection.data.data;
        this.setState({loading:false,projection: projection});
      this.setState({tabDisplay: 'flex'})
      })
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    render() {
      const {address, address2, projection, loading} = this.state;
        return (
          <div>
            {/* {console.log(this.state.tabDisplay)} */}
            <div className="center">
            <div className="center">Mining Dashboard</div>
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
                    <i className="fa fa-spinner fa-spin"></i>
             {loading ? <LoadingWheel type="Puff" color="#00BFFF" height="100" width="100" /> : ''}
            <MiningMenu
              className="hidden"
              display={this.state.tabDisplay}
              getHashrate={this.state.address.avgHashrate.h6} 
              runCheck={this.state.runCheck}
              getPoolBalance={this.state.address.balance} 
              getGlobalEarnings={this.state.address2.sum()} 
              getHourUsd={this.state.projection.hour.dollars}
              getHourEth={this.state.projection.hour.coins}

              getDayUsd={this.state.projection.day.dollars}
              getDayEth={this.state.projection.day.coins}
              getWeekUsd={this.state.projection.week.dollars}
              getWeekEth={this.state.projection.week.coins}
              getMonthUsd={this.state.projection.month.dollars}
              getMonthEth={this.state.projection.month.coins}
            />
            </div>
            <h2>Top Miners</h2>
            <TopMiners />
          </div>
        )}}

  export default withStyles(styles)(App);
