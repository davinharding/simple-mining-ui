import React, {Component} from 'react';

class PoolBalance extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {Number(this.props.getPoolBalance).toFixed(2)} ETH
            </div>
        )
    }
}

export default PoolBalance