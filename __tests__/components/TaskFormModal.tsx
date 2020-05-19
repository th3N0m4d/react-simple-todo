import * as React from 'react'
import { shallow } from 'enzyme'

import TaskFormModal from '@/components/TaskFormModal'

describe('TaskFormModal', () => {
    const defaultProps = {
        onDateChange: jest.fn(),
        onHide: jest.fn(),
        onNameChange: jest.fn()
    }

    describe('Props', () => {
        it('should render default component', () => {
            const wrapper = shallow(<TaskFormModal {...defaultProps} />)

            expect(wrapper).toMatchSnapshot()
        });

        it.each`
            propName        | value
            ${'name'}       | ${'Study React'}
            ${'show'}       | ${true}
            ${'show'}       | ${false}
            ${'dueDate'}    | ${546300000000}
            ${'dueDate'}    | ${null}
        `('should render component with prop $propName and value $value',
            ({ propName, value }) => {
                const props = Object.assign({}, defaultProps, { [propName]: value })
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

        it('should trigger onNameChange callback', () => {
            const wrapper = shallow(<TaskFormModal {...defaultProps} />)

            const input = wrapper.find('[name="name"]')

            input.simulate('change', { target: { value: 'John Doe' } })

            expect(defaultProps.onNameChange).toHaveBeenCalledWith('John Doe')
        });

        it('should trigger onDateChange callback', () => {
            const wrapper = shallow(<TaskFormModal {...defaultProps} />)

            const input = wrapper.find('[name="dueDate"]')

            input.simulate('change', { target: { value: '2020-01-01' } })

            expect(defaultProps.onDateChange).toHaveBeenCalledWith(1577836800000)
        });
    });

});