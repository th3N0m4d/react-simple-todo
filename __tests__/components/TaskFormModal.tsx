import * as React from 'react'
import { shallow } from 'enzyme'

import TaskFormModal from '@/components/TaskFormModal'

describe('TaskFormModal', () => {
    const defaultProps = {
        onHide: jest.fn(),
        onSave: jest.fn()
    }

    describe('Props', () => {
        it('should render default component', () => {
            const wrapper = shallow(<TaskFormModal {...defaultProps} />)

            expect(wrapper).toMatchSnapshot()
        });

        it.each`
            propName        | value
            ${'show'}       | ${true}
            ${'show'}       | ${false}
        `('should render component with prop $propName and value $value',
            ({ propName, value }) => {
                const props = { ...defaultProps, ...{ [propName]: value } }
                const wrapper = shallow(<TaskFormModal {...props} />)

                expect(wrapper).toMatchSnapshot()
            })
    });

    describe('Interaction', () => {
        it('should trigger onHide callback', () => {
            const wrapper = shallow(<TaskFormModal {...defaultProps} />)

            const closeButton = wrapper.find('[data-test="close-button"]')

            closeButton.simulate('click')

            expect(defaultProps.onHide).toHaveBeenCalled()
        });

        it('should trigger onSave callback', () => {
            const wrapper = shallow(<TaskFormModal {...defaultProps} />)

            const saveButton = wrapper.find('[data-test="save-button"]')

            saveButton.simulate('click')

            expect(defaultProps.onSave).toHaveBeenCalled()
        });
    });

});