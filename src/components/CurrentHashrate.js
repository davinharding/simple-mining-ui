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
              <div className="data">  
                <NumberFormat value={this.props.getHashrate} displayType={'text'} thousandSeparator={true}   prefix={''} /> Mh/s 
              </div>
              <div className='emoji'>
                Status: {this.statusCheck()}
              </div>
            </div>
        )
    }
}

export default CurrentHashrate
