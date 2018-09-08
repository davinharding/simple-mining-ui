import React, {Component} from 'react';

class CurrentHashrate extends Component {

    render() {
        return (
            <div>
              {this.props.getHashrate} Mh/s
            </div>
        )
    }
}

export default CurrentHashrate