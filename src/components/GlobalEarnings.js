import React, {Component} from 'react';
import NumberFormat from 'react-number-format';
import '../css/GlobalEarnings.css';

class GlobalEarnings extends Component {
    render() {
        return (
            <div className="earningsData">
                <NumberFormat value={this.props.getGlobalEarnings.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={''} /> ETH
            </div>
        )
    }
}

export default GlobalEarnings