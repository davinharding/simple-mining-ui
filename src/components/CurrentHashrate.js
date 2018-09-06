import React, {Component} from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';

class CurrentHashrate extends Component {
    constructor(props) {
        super(props);        
    }
    render() {
        return (
            <div>{this.props.getHashrate} Mh/s</div>
        )
    }
}

export default CurrentHashrate
