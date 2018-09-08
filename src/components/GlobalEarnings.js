import React, {Component} from 'react';

class GlobalEarnings extends Component {

    render() {
        return (
            <div>
                {this.props.getGlobalEarnings} ETH
            </div>
        )
    }
}

export default GlobalEarnings