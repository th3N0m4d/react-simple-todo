import * as React from 'react'
import { shallow } from 'enzyme'
import Button from 'react-bootstrap/Button'

import TaskItem from '@/components/TaskItem'
import Variants from '@/constants/Variants'

describe('TaskItem', () => {
  describe('Props', () => {
    it('should render component correctly', () => {
      const wrapper = shallow(<TaskItem />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should display task name', () => {
      const wrapper = shallow(<TaskItem name='Buy wine' />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should display author\'s name', () => {
      const wrapper = shallow(<TaskItem author='Bob' />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should mark task as completed', () => {
      const wrapper = shallow(<TaskItem completed={true} />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should change the variant to success', () => {
      const wrapper = shallow(<TaskItem variant={Variants.secondary} />)

      expect(wrapper).toMatchSnapshot()
    })

  });

  describe('Interaction', () => {
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
        <TaskItem onToggle={onToggleSpy} completed={true} />
      )

      const button = wrapper.find(Button).at(INDEX)

      button.simulate('click')

      expect(onToggleSpy).toHaveBeenCalled()
    })
  });

})
