import React, {Component} from 'react';

class Projections extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                <li>{this.props.getHourUsd} USD/hour {this.props.getHourEth} ETH/hour</li>
                <li>{this.props.getDayUsd} USD/day {this.props.getDayEth} ETH/day</li>
                <li>{this.props.getWeekUsd} USD/week {this.props.getWeekEth} ETH/week</li>
                <li>{this.props.getMonthUsd} USD/month {this.props.getMonthEth} ETH/month</li>
            </ul>
        )
    }
}

export default Projections