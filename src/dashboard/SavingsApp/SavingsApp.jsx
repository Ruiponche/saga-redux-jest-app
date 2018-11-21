import React, { Component } from 'react'
import CurrencyInput from '../common/CurrencyInput'
import PercentageInput from '../common/PercentageInput'
import NumberFormat from 'react-number-format'
import Typography from '@material-ui/core/Typography'
import InputFrame from '../common/layout/InputFrame'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import './style.css'

class SavingsApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // currentSavings: undefined,
      baseSalary: undefined,
      monthlyExpenses: undefined,
      annualInflation: undefined,
      annualInterestRate: undefined,
      years: undefined,
      totalSavings: undefined,
      showAnnualInflation: false,
      showMonthlyExpenses: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.inputHasChanged(prevState, this.state)) {
      this.setState({ totalSavings: this.totalSavings() })
    }
  }

  inputHasChanged = (prevState, currentState) => {
    if (
      (prevState.baseSalary !== currentState.baseSalary ||
        (prevState.monthlyExpenses !== currentState.monthlyExpenses &&
          currentState.showMonthlyExpenses) ||
        (prevState.annualInflation !== currentState.annualInflation &&
          currentState.showAnnualInflation) ||
        prevState.annualInterestRate !== currentState.annualInterestRate ||
        prevState.years !== currentState.years) &&
      (currentState.baseSalary &&
        (currentState.monthlyExpenses || !currentState.showMonthlyExpenses) &&
        (currentState.annualInflation || !currentState.showAnnualInflation) &&
        currentState.annualInterestRate &&
        currentState.years)
    ) {
      return true
    }
    return false
  }

  totalSavings = () => {
    const {
      currentSavings,
      baseSalary,
      monthlyExpenses,
      annualInflation,
      annualSavings,
      annualInterestRate,
      years,
      showAnnualInflation,
      showMonthlyExpenses
    } = this.state
    const annualInflationValue = showAnnualInflation ? annualInflation : 0
    const monthlyExpensesValue = showMonthlyExpenses ? monthlyExpenses : 0
    const rate = (annualInterestRate - annualInflationValue) / 100
    const totalSavings = (baseSalary - monthlyExpensesValue) * (1 + rate * years)
    return totalSavings
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  controlSwitches() {
    return (
      <FormGroup
        row
        style={{ width: '60%', padding: '20px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        <FormControlLabel
          className="control-show-monthly-expenses"
          control={
            <Switch
              checked={this.state.showMonthlyExpenses}
              onChange={this.handleChange('showMonthlyExpenses')}
              value="checkedA"
              color="primary"
            />
          }
          label="Monthly expenses"
        />
        <FormControlLabel
          className="control-show-annual-inflation"
          control={
            <Switch
              checked={this.state.showAnnualInflation}
              onChange={this.handleChange('showAnnualInflation')}
              value="checkedB"
              color="primary"
            />
          }
          label="Annual Inflation"
        />
      </FormGroup>
    )
  }

  render() {
    const { showAnnualInflation, showMonthlyExpenses } = this.state
    return (
      <React.Fragment>
        <p>Calculate your savings</p>
        {this.controlSwitches()}
        <div className="savings-app-container">
          <Typography variant="body1" align="right" className="base-salary-label">
            Base salary
          </Typography>
          <InputFrame>
            <CurrencyInput
              placeholder="Base Salary"
              onValueChange={values => this.setState({ baseSalary: values })}
            />
          </InputFrame>
          {showMonthlyExpenses && (
            <React.Fragment>
              <Typography variant="body1" align="right">
                Monthly expenses
              </Typography>
              <CurrencyInput
                placeholder="Monthly expenses"
                onValueChange={values => this.setState({ monthlyExpenses: values })}
              />
            </React.Fragment>
          )}
          {showAnnualInflation && (
            <React.Fragment>
              <Typography variant="body1" align="right">
                Annual Inflation
              </Typography>
              <PercentageInput
                placeholder="Annual Inflation"
                onValueChange={values => this.setState({ annualInflation: values })}
              />
            </React.Fragment>
          )}
          <Typography variant="body1" align="right" className="annual-interest-rate-label">
            Annual Interest Rate
          </Typography>
          <PercentageInput
            placeholder="Annual Interest Rate"
            onValueChange={values => this.setState({ annualInterestRate: values })}
          />
          <Typography variant="body1" align="right" className="number-years-label">
            # years
          </Typography>
          <NumberFormat
            placeholder="years"
            onValueChange={values => this.setState({ years: values.floatValue })}
          />
          <Typography variant="body1" align="right">
            Annual savings
          </Typography>
          <NumberFormat thousandSeparator={true} prefix={'$'} value={this.state.totalSavings} />
        </div>
      </React.Fragment>
    )
  }
}

export default SavingsApp
