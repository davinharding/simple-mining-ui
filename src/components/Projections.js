import React, {Component} from 'react';
import '../css/Projections.css';

class Projections extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="projections">
            <div className="projLists">
              <ul>
                  <li>{this.props.getHourUsd.toFixed(2)} USD/hour</li>   <li>{this.props.getHourEth.toFixed(2)} ETH/hour</li>
              </ul>
              </div>
              <div className="projLists">
              <ul>
                  <li>{this.props.getDayUsd.toFixed(2)} USD/day</li> 
                  <li>{this.props.getDayEth.toFixed(2)} ETH/day</li>
              </ul>
              </div>
              <ul>
                  <li>{this.props.getWeekUsd.toFixed(2)} USD/week</li>   <li>{this.props.getWeekEth.toFixed(2)} ETH/week</li>
              </ul>
              <ul>
                  <li>{this.props.getMonthUsd.toFixed(2)} USD/month</li>   <li>{this.props.getMonthEth.toFixed(2)} ETH/month</li>
              </ul>
            </div>
        )
    }
}

export default Projections