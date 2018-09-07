import React, {Component} from 'react';

class PoolBalance extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.getPoolBalance} ETH
            </div>
        )
    }
}

export default PoolBalance