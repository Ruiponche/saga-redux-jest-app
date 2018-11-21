import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'
import NumberFormat from 'react-number-format'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CurrencyInput from '../../common/CurrencyInput'
import holidaysReducers from '../../../redux/reducers/holidaysReducers'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
})

class HolidaysTable extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { classes, holidays } = this.props
    return (
      Object.keys(holidays).length > 0 && (
        <React.Fragment>
          <span>Filter by date: </span>
          <NumberFormat format="##/##" placeholder="DD/MM" mask={['D', 'D', 'M', 'M']} />
          <CurrencyInput placeholder="money!" />
          <br />
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell> Nombre Local</TableCell>
                  <TableCell> Nombre Internacional</TableCell>
                  <TableCell> Fecha</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {holidays.map(row => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell>{row.localName}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.date}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Paper>
        </React.Fragment>
      )
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    holidays: state.holidays.holidays
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(HolidaysTable)
