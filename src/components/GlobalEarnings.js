import React, {Component} from 'react';

class GlobalEarnings extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.getGlobalEarnings.toFixed(2)} ETH
            </div>
        )
    }
}

export default GlobalEarnings