import { SHOW_MODAL, HIDE_MODAL, ModalActionTypes } from "./types"

const showModal = (): ModalActionTypes => ({
    type: SHOW_MODAL,
    modalShow: true
})

const hideModal = () => ({
    type: HIDE_MODAL,
    modalShow: false
})

export {
    showModal,
    hideModal
}