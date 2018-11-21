import React, { Component } from 'react'
import NumberFormat from 'react-number-format'

class CurrencyInput extends Component {
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
    const { placeholder } = this.props
    return (
      <NumberFormat
        placeholder={placeholder}
        thousandSeparator={true}
        prefix={'$'}
        onValueChange={this.onValueChange}
        allowNegative={false}
      />
    )
  }
}

export default CurrencyInput
