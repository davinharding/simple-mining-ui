import React, {Component} from 'react';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NumberFormat from 'react-number-format';
import '../css/TopMiners.css';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class TopMiners extends Component {
    constructor(props) {
        super(props)
        this.state = {
            miners: []
        }
    }
    async componentDidMount() {

        let miners = await axios.get('https://api.nanopool.org/v1/eth/pool/topminers');
        miners =  miners.data.data
        this.setState({miners})

    }


    render() {
      return (
        <div>
        <Paper id="main" >
          <Table >
            <TableHead>
            <TableRow >
                <TableCell>Rank</TableCell>
                <TableCell>Address</TableCell>
                <TableCell id="hashrate" numeric>Hashrate</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                    {
                        this.state.miners.map((miner, i) => {
                            i++;
                            return (   
                                    <TableRow id="row" key={`miner${i}`} >   
                                        <TableCell>{i}</TableCell> 
                                        <TableCell><span onClick={(ev) => {this.props.handleSubmit(ev, miner.address)}}>{miner.address}</span></TableCell>
                                        <TableCell><NumberFormat value={miner.hashrate} displayType={'text'} thousandSeparator={true} prefix={''} /> Mh/s</TableCell>
                                    </TableRow>               

                            )
                        })
                    }
            </TableBody>
          </Table>
        </Paper>
        </div>
  );
}
}


export default withStyles(styles)(TopMiners);
