import React, {Component} from 'react';

class CurrentHashrate extends Component {
    constructor(props) {
        super(props);        
    }
    render() {
        return (
            <div>
              {this.props.getHashrate} Mh/s
            </div>
        )
    }
}

export default CurrentHashrate
