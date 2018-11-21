import React, { Component } from 'react'
import HolidaysTable from './HolidaysTable'

class HolidaysApp extends Component {
  constructor(props) {
    super(props)
    this.state = { countryCode: undefined, errorMessage: '' }
  }

  setCountryCode = countryCode => {
    this.setState({ countryCode: countryCode })
  }

  onGetHolidays = () => {
    const { countryCode } = this.state
    if (countryCode) {
      this.props.getHolidays(countryCode)
      this.setState({ errorMessage: '' })
      return
    }
    this.setState({ errorMessage: 'you must select a country' })
  }

  render() {
    const { getHolidays } = this.props
    const { countryCode, errorMessage } = this.state
    return (
      <React.Fragment>
        <span>Selected country: {this.state.countryCode} </span>
        <br />
        <button onClick={() => this.setCountryCode('US')}>USA</button>
        <button onClick={() => this.setCountryCode('AU')}>Australia</button>
        <button onClick={() => this.setCountryCode('NZ')}>New Zealand</button>
        <button onClick={() => this.setCountryCode('CA')}>Canada</button>
        <button onClick={() => this.setCountryCode('UY')}>Uruguay</button>
        <button onClick={() => this.setCountryCode('VE')}>Venezuela</button>
        <br />
        {errorMessage}
        <br />
        <button onClick={this.onGetHolidays}> Get Holidays!! </button>
        <br />
        <HolidaysTable />
      </React.Fragment>
    )
  }
}

export default HolidaysApp
