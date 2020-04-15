import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import * as R from 'ramda'

import { App } from '../components/App'
import TaskFormModal from '../components/TaskFormModal'

const expectToMatchSnapshot = (component) => {
  expect(renderer.create(component).toJSON()).toMatchSnapshot()
}

describe('App', () => {
  describe('props', () => {
    it('should render', () => {
      expectToMatchSnapshot(<App dispatch={R.T} />)
    })

    it('should dispatch when component is mounted', () => {
      const dispatchSpy = jest.fn()
      mount(<App dispatch={dispatchSpy} />)

      expect(dispatchSpy).toHaveBeenCalled()
    })

    it('should render component with initialTasks', () => {
      const tasks = [
        { id: 0, name: 'Buy wine' },
        { id: 1, name: 'Buy cheese' }
      ]
      expectToMatchSnapshot(<App initialTasks={tasks} dispatch={R.T} />)
    })
  })

  describe('interaction', () => {
    it('should bind to TaskModals onSave event', () => {
      const wrapper = shallow(<App dispatch={R.T} />)

      const handleOnSaveSpy = jest.spyOn(wrapper.instance(), 'handleOnSave')

      wrapper.instance().forceUpdate()

      wrapper.find(TaskFormModal).prop('onSave')()

      expect(handleOnSaveSpy).toHaveBeenCalled()
    })

    it('should bind to TaskModals onHide event', () => {
      const wrapper = shallow(<App dispatch={R.T} />)

      const handleOnSaveSpy = jest.spyOn(wrapper.instance(), 'handleOnModalHide')

      wrapper.instance().forceUpdate()

      wrapper.find(TaskFormModal).prop('onHide')()

      expect(handleOnSaveSpy).toHaveBeenCalled()
    })
  })
})
