import React, {Component} from 'react';

const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 800,
    },
});

class Banner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="CryptoDash">
                <img src={require('../imgs/eth-logo.png')} alt="Ethereum Icon" />
                <span id="CryptoDashboardText">
                    Crypto Dashboard
                </span>
            </div>
        )
    }
}

export default Banner;