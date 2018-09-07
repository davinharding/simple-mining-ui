import React, {Component} from 'react';

class Projections extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.getProjections}
            </div>
        )
    }
}

export default Projections