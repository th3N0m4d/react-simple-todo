import * as React from 'react'
import { shallow } from 'enzyme'
import Button from 'react-bootstrap/Button'

import TaskItem from '@/components/TaskItem'

describe('TaskItem', () => {
  describe('Props', () => {
    it('should render component correctly', () => {
      const wrapper = shallow(<TaskItem />)

      const subheading = wrapper.find('[data-test="subheading"]')
      const confirmButton = wrapper.find('[data-test="confirm-button"]')
      const undoButton = wrapper.find('[data-test="undo-button"]')
      const heading = wrapper.find('[data-test="heading"]')

      expect(wrapper).toMatchSnapshot()
      expect(subheading.exists()).toBeFalsy()
      expect(confirmButton.exists()).toBeTruthy()
      expect(undoButton.exists()).toBeFalsy()
      expect(heading.hasClass('widget-heading--completed')).toBeFalsy()
    })

    it.each`
      propName        | value             
      ${'dueDate'}    | ${546300000000}   
      ${'name'}       | ${'Buy wine'}     
      ${'completed'}  | ${true}            
    `('should render component with prop $propName and value $value',
      ({ propName, value }) => {
        const props = { [propName]: value }
        const wrapper = shallow(<TaskItem {...props} />)

        expect(wrapper).toMatchSnapshot()
      });

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
