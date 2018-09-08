import React, {Component} from 'react';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../css/TopMiners.css';
import CurrentHashrate from './CurrentHashrate';

const styles = theme => ({
  root: {
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
        <Paper id="main" >
        <h2>Top Miners</h2>
        <Table >
            <TableHead>
            <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell>Address</TableCell>
                <TableCell numeric>Hashrate</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                    {
                        this.state.miners.map((miner, i) => {
                            function clicked(){
                                console.log(miner.address);
                                const minerAddress = miner.address; 
                            }    
                            i++;
                            return (   
                                    <TableRow id="row" onClick={clicked}>   
                                        <TableCell>{i}</TableCell> 
                                        <TableCell>{miner.address}</TableCell>
                                        <TableCell>{miner.hashrate}</TableCell>
                                    </TableRow>               

                            )
                        })
                        }
            </TableBody>
        </Table>
        <CurrentHashrate/>
        </Paper>
  );
}
}


export default withStyles(styles)(TopMiners);
