import React from 'react'
import CurrencyInput from './index.jsx'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<CurrencyInput placeholder="money" />).toJSON()
  expect(tree).toMatchSnapshot()
})
