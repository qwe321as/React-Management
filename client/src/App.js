import React, { Component } from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  porgress: {
    margin: theme.spacing.unit * 2
  }
})
/*
constructor()
componentWillMount()
render()
componentDidMount()
 
props or state => shouldCompementUpdate() -> 상태변화 재구성 상태만 잘 관리하면됨

*/
class App extends Component {
  state = {
    customers: "",
    completed: 0
  }
  componentDidMount() {
    this.timer = setInterval(this.porgress, 20);
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));

  }
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  porgress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });

  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직압</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map(c => {
                return (
                  <Customer key={c.id} id={c.id} imge={c.imge} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                );
              })
                : <TableRow>
                  <TableCell colSpan="6" align='center'>
                    <CircularProgress className={classes.porgress} variant="determinate" value={this.state.completed} />

                  </TableCell>
                </TableRow>
              }


            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd></CustomerAdd>
      </div>
    );
  }
}

export default withStyles(styles)(App);