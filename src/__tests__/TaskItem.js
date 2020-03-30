import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import TaskItem, { ButtonRemove, ButtonConfirm } from '../components/TaskItem'

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

  it('should trigger onRemove callback', () => {
    const onRemoveSpy = jest.fn()
    const wrapper = shallow(
      <TaskItem onRemove={onRemoveSpy} />
    )

    const buttonRemove = wrapper.find(ButtonRemove)

    buttonRemove.simulate('click')

    expect(onRemoveSpy).toHaveBeenCalled()
  })

  it('should trigger onConfirm callback', () => {
    const onConfirmSpy = jest.fn()
    const wrapper = shallow(
      <TaskItem onConfirm={onConfirmSpy} />
    )

    const button = wrapper.find(ButtonConfirm)

    button.simulate('click')

    expect(onConfirmSpy).toHaveBeenCalled()
  })
})
