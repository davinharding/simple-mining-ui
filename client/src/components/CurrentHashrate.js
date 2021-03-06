import React, {Component} from 'react';
import NumberFormat from 'react-number-format';
import '../css/CurrentHashrate.css';

class CurrentHashrate extends Component {
    statusCheck = () => {
        return (this.props.runCheck ? '👍🏻 ' : '👎🏻')
    }

    render() {
        return (
            <div>
              <div id="data">  
                <NumberFormat value={this.props.getHashrate} displayType={'text'} thousandSeparator={true}   prefix={''} /> Mh/s (6h Average)
              </div>
              <div className='emoji'>
                Run Status: {this.statusCheck()} 
              </div>
            </div>
        )
    }
}

export default CurrentHashrate
