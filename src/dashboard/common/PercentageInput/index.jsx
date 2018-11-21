import React, { Component } from 'react'
import NumberFormat from 'react-number-format'

class PercentageInput extends Component {
  constructor(props) {
    super(props)
    this.state = { value: undefined, formattedValue: undefined }
  }

  setValues = values => {
    console.log(values)
  }

  onValueChange = values => {
    const { onValueChange } = this.props
    this.setValues(values)
    onValueChange && onValueChange(values.floatValue)
  }

  render() {
    const { placeholder, onChange } = this.props
    return (
      <NumberFormat
        placeholder={placeholder}
        prefix={'%'}
        onValueChange={this.onValueChange}
        allowNegative={true}
      />
    )
  }
}

export default PercentageInput
