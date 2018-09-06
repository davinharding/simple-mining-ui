import React, {Component} from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';

class CurrentHashrate extends Component {
  constructor() {
    super();
    this.state = {
      rate: {}
    }
  }
  async componentDidMount() {
    let rate = await axios.get(`https://api.nanopool.org/v1/eth/hashrate/${this.props.address}`)
    rate = this.rate
    console.log(rate);
  }


  render() {
    return (
      <Paper id='currentRate'>
      <h3>Current Hashrate: 454</h3>
      </Paper>
  )}
}

export default CurrentHashrate;
