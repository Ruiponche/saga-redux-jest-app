import HolidaysApp from './HolidaysApp'

import React, { Component } from 'react'
import { getHolidays as getHolidaysAction } from '../../redux/actions/holidaysActions'
import { connect } from 'react-redux'

const mapDispatchToProps = {
  getHolidays: getHolidaysAction
}

export default connect(
  null,
  mapDispatchToProps
)(HolidaysApp)
