import React, {Component} from 'react';
import '../css/PoolBalance.css'

class PoolBalance extends Component {
    render() {
        return (
            <div className="poolbalance">
                {Number(this.props.getPoolBalance).toFixed(2)} ETH
            </div>
        )
    }
}

export default PoolBalance