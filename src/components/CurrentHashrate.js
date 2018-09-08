import React, {Component} from 'react';
import NumberFormat from 'react-number-format';
import '../css/CurrentHashrate.css';

class CurrentHashrate extends Component {
    constructor(props) {
        super(props);        
    }

    statusCheck = () => {
        return (this.props.runCheck ? '👍🏻 ' : '👎🏻')
    }

    render() {
        return (
            <div className="data">
              <NumberFormat value={this.props.getHashrate} displayType={'text'} thousandSeparator={true} prefix={''} /> Mh/s
              {this.statusCheck()}
            </div>
           
        )
    }
}

export default CurrentHashrate
