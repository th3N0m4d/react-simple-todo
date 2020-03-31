import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Button from 'react-bootstrap/Button'

import TaskItem from '../components/TaskItem'

const expectToMatchSnapshot = (component) => {
  expect(renderer.create(component).toJSON()).toMatchSnapshot()
}

describe('TaskItem', () => {
  it('should render component correctly', () => {
    expectToMatchSnapshot(<TaskItem />)
  })

  it('should display task name', () => {
    expectToMatchSnapshot(<TaskItem name='Buy wine' />)
  })

  it('should display author\'s name', () => {
    expectToMatchSnapshot(<TaskItem author='Bob' />)
  })

  it('should mark task as completed', () => {
    expectToMatchSnapshot(<TaskItem completed />)
  })

  it('should trigger onRemove callback', () => {
    const onRemoveSpy = jest.fn()
    const INDEX = 1
    const wrapper = shallow(
      <TaskItem onRemove={onRemoveSpy} />
    )

    const button = wrapper.find(Button).at(INDEX)

    button.simulate('click')

    expect(onRemoveSpy).toHaveBeenCalled()
  })

  it('should trigger onToggle callback for confirm operation', () => {
    const onToggleSpy = jest.fn()
    const INDEX = 0
    const wrapper = shallow(
      <TaskItem onToggle={onToggleSpy} />
    )

    const button = wrapper.find(Button).at(INDEX)

    button.simulate('click')

    expect(onToggleSpy).toHaveBeenCalled()
  })

  it('should trigger onToggle callback for undo operation', () => {
    const onToggleSpy = jest.fn()
    const INDEX = 0
    const wrapper = shallow(
      <TaskItem onToggle={onToggleSpy} completed />
    )

    const button = wrapper.find(Button).at(INDEX)

    button.simulate('click')

    expect(onToggleSpy).toHaveBeenCalled()
  })
})
