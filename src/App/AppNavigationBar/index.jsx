import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SavingsIcon from '@material-ui/icons/AttachMoney'
import HolidaysIcon from '@material-ui/icons/DateRange'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
  // button: {
  //   margin: theme.spacing.unit
  // },
  // extendedIcon: {
  //   marginRight: theme.spacing.unit
  // }
}

const AppNavigationBar = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/savings" variant="extendedFab" className={classes.button}>
            <SavingsIcon className={classes.extendedIcon} />
            Savings App
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button component={Link} to="/holidays" variant="extendedFab" className={classes.button}>
            <HolidaysIcon className={classes.extendedIcon} />
            Holidays App
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(AppNavigationBar)
