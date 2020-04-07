import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import App from '../components/App'
import TaskFormModal from '../components/TaskFormModal'
import Button from 'react-bootstrap/Button'

const expectToMatchSnapshot = (component) => {
  expect(renderer.create(component).toJSON()).toMatchSnapshot()
}

describe('App', () => {
  describe('props', () => {
    it('should render', () => {
      expectToMatchSnapshot(<App />)
    })

    it('should render component with initialTasks', () => {
      const tasks = [
        { id: 0, name: 'Buy wine' },
        { id: 1, name: 'Buy cheese' }
      ]
      expectToMatchSnapshot(<App initialTasks={tasks} />)
    })
  })

  describe('interaction', () => {
    it('should display modal', () => {
      const wrapper = shallow(<App />)

      const button = wrapper.find(Button).at(1)

      button.simulate('click')

      const modal = wrapper.find(TaskFormModal)

      expect(modal.prop('show')).toBeTruthy()
    })

    it('should hide modal when user clicks "Save"', () => {
      const wrapper = shallow(<App />)

      const handleOnSaveSpy = jest.spyOn(wrapper.instance(), 'handleOnSave')

      wrapper.instance().forceUpdate()

      wrapper.find(TaskFormModal).prop('onSave')()

      expect(handleOnSaveSpy).toHaveBeenCalled()
    })

    it('should hide modal when user clicks "Cancel"', () => {
      const wrapper = shallow(<App />)

      const handleOnSaveSpy = jest.spyOn(wrapper.instance(), 'handleOnModalHide')

      wrapper.instance().forceUpdate()

      wrapper.find(TaskFormModal).prop('onHide')()

      expect(handleOnSaveSpy).toHaveBeenCalled()
    })
  })
})
