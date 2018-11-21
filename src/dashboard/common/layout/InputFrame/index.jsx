import React, { Component } from 'react'
import './style.css'

class InputFrame extends Component {
  constructor(props) {
    super(props)
    this.state = { className: 'normal frame' }
  }

  render() {
    const { className } = this.state

    return (
      <div
        className={className}
        onMouseEnter={() => this.setState({ className: 'highlight frame' })}
        onMouseLeave={() => this.setState({ className: 'normal frame' })}
      >
        {this.props.children}
      </div>
    )
  }
}

export default InputFrame
