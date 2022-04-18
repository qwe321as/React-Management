import React, { Component } from 'react';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})
/*
const customers = [
  {
    'id': 1,
    'imge': 'https://placeimg.com/64/64/any',
    'name': '테스트',
    'birthday': '980121',
    'gender': '여성',
    'job': '대학생',

  },
  {
    'id': 2,
    'imge': 'https://placeimg.com/64/64/any',
    'name': '테스트1',
    'birthday': '980121',
    'gender': '남성',
    'job': '대학생',

  },
  {
    'id': 3,
    'imge': 'https://placeimg.com/64/64/any',
    'name': '테스트2',
    'birthday': '980121',
    'gender': '여성',
    'job': '대학생',

  },
]
*/
class App extends Component {
  state = {
    customers: ""
  }
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  render() {
    const { classes } = this.props;
    return (
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
              : ""
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);