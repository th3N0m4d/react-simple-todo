import modal from '@/store/modal/reducer'
import { showModal, hideModal } from '@/store/modal/actions'

describe('Modal reducer', () => {

    it('should handle showModal action', () => {
        const initialState = { modalShow: false }
        const newState = { modalShow: true }

        expect(modal(initialState, showModal())).toEqual(newState)
    });

    it('should handle hideModal action', () => {
        const initialState = { modalShow: true }
        const newState = { modalShow: false }

        expect(modal(initialState, hideModal())).toEqual(newState)
    });
});