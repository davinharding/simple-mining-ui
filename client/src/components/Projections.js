import React, {Component} from 'react';
import NumberFormat from 'react-number-format';
import '../css/Projections.css';

class Projections extends Component {
    render() {
        return (
            <div id="projections">
            <div className="projLists">
              <ul>
                  <li><NumberFormat value={this.props.getHourUsd.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> USD/hr</li>   
                  <li>{this.props.getHourEth.toFixed(2)} ETH/hr</li>
              </ul>
              </div>
              <div className="projLists">
              <ul>
                  <li><NumberFormat value={this.props.getDayUsd.toFixed(2) } displayType={'text'} thousandSeparator={true} prefix={'$'} /> USD/day</li> 
                  <li>{this.props.getDayEth.toFixed(2)} ETH/day</li>
              </ul>
              </div>
              <div className="projLists">
              <ul>
                  <li><NumberFormat value={this.props.getWeekUsd.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> USD/wk</li>   
                  <li>{this.props.getWeekEth.toFixed(2)} ETH/wk</li>
              </ul>
              </div>
              <div className="projLists">
              <ul>
                  <li><NumberFormat value={this.props.getMonthUsd.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> USD/mth</li>   
                  <li><NumberFormat value={this.props.getMonthEth.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={''} /> ETH/mth</li>
              </ul>
              </div>
            </div>
        )
    }
}

export default Projections