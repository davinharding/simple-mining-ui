import React, {Component} from 'react';

class PoolBalance extends Component {
    render() {
        return (
            <div>
                {this.props.getPoolBalance} ETH
            </div>
        )
    }
}

export default PoolBalance