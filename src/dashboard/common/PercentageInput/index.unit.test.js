import React from 'react'
import InflationInput from './index.jsx'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<InflationInput placeholder="money" />).toJSON()
  expect(tree).toMatchSnapshot()
})
