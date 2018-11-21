import React from 'react'
import renderer from 'react-test-renderer'
import SavingsApp from './SavingsApp'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('renders correctly', () => {
  const tree = renderer.create(<SavingsApp />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('<SavingsApp/>', () => {
  it('check presence of labels', () => {
    const wrapper = shallow(<SavingsApp />)
    expect(wrapper.contains([<p>Calculate your savings</p>])).toEqual(true)
    expect(wrapper.exists('.base-salary-label')).toEqual(true)
    expect(wrapper.exists('.annual-interest-rate-label')).toEqual(true)
    expect(wrapper.exists('.number-years-label')).toEqual(true)
  })
})
