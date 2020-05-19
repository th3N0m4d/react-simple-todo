export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

interface ShowModal {
    type: typeof SHOW_MODAL,
    modalShow: boolean
}

interface HideModal {
    type: typeof HIDE_MODAL,
    modalShow: boolean
}

export type ModalActionTypes = ShowModal | HideModal