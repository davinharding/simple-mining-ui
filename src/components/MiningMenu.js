import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CurrentHashrate from './CurrentHashrate';
import PoolBalance from './PoolBalance';
import Projections from './Projections';
import GlobalEarnings from './GlobalEarnings'
import '../css/MiningMenu.css';


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 800,
  },
});

class MiningMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            displayMenu: this.props.display
        }
    }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className="menu" style={{display: `${this.props.display}`}} >
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Current Hashrate" />
            <Tab label="Balance Pool" />
            <Tab label="Global Earnings" />
            <Tab label="Projections"/>
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <CurrentHashrate getHashrate={this.props.getHashrate} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <PoolBalance getPoolBalance={this.props.getPoolBalance} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <GlobalEarnings getGlobalEarnings={this.props.getGlobalEarnings} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Projections 
            getHourUsd={this.props.getHourUsd}
            getHourEth={this.props.getHourEth}
            getDayUsd={this.props.getDayUsd}
            getDayEth={this.props.getDayEth}
            getWeekUsd={this.props.getWeekUsd}
            getWeekEth={this.props.getWeekEth}
            getMonthUsd={this.props.getMonthUsd}
            getMonthEth={this.props.getMonthEth}
             />
          </TabContainer>
        </SwipeableViews>
      </div>
      </div>
    );
  }
}

MiningMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiningMenu);