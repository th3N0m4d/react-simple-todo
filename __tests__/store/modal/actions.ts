
import {
    SHOW_MODAL,
    HIDE_MODAL
} from '@/store/modal/types'

import {
    showModal,
    hideModal
} from '@/store/modal/actions'

describe('ModalActionTypes', () => {
    it('should handle modal displaying', () => {
        const expectedAction = { type: SHOW_MODAL, modalShow: true }

        expect(showModal()).toEqual(expectedAction)
    })

    it('should handle modal hidding', () => {
        const expectedAction = { type: HIDE_MODAL, modalShow: false }

        expect(hideModal()).toEqual(expectedAction)
    })
});