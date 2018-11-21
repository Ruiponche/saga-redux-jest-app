import React from 'react'
import renderer from 'react-test-renderer'
import InputFrame from './index'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const child = <div>Sample text</div>

configure({ adapter: new Adapter() })

test('input frame class changes when hovered', () => {
  const inputFrameComponent = renderer.create(<InputFrame>{child}</InputFrame>)
  let tree = inputFrameComponent.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onMouseEnter()
  tree = inputFrameComponent.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onMouseLeave()
  tree = inputFrameComponent.toJSON()
  expect(tree).toMatchSnapshot()
})

describe('<InputFrame/>', () => {
  it('should match shallowed component', () => {
    const wrapper = shallow(<InputFrame />)
    expect(wrapper).toMatchSnapshot()
  })

  it("should contain a 'normal' in its className", () => {
    const wrapper = shallow(<InputFrame />)
    expect(wrapper.find('.frame').hasClass('normal')).toBe(true)
  })

  it("should not contain a 'highlight' in its className", () => {
    const wrapper = shallow(<InputFrame />)
    expect(wrapper.find('.frame').hasClass('highlight')).toBe(false)
  })

  it("on mouse enter 'normal' -> 'highlight, on mouse leave  'highlight' -> 'normal' ", () => {
    const wrapper = shallow(<InputFrame />)
    wrapper.find('.frame').simulate('mouseenter')
    expect(wrapper.find('.frame').hasClass('highlight')).toBe(true)

    wrapper.find('.frame').simulate('mouseleave')
    expect(wrapper.find('.frame').hasClass('highlight')).toBe(false)
    expect(wrapper.find('.frame').hasClass('normal')).toBe(true)
  })
})
