import { Reducer } from "redux"

import {
    ModalActionTypes,
    SHOW_MODAL,
    HIDE_MODAL
} from '@/store/modal/types'
import State from '@/store/modal/ModalState'

const initialState: State = {
    modalShow: false
}

const tasks: Reducer<State, ModalActionTypes> = (
    state = initialState,
    action
) => {
    if (action.type === SHOW_MODAL) {
        return { ...state, ...{ modalShow: true } }
    }

    if (action.type === HIDE_MODAL) {
        return { ...state, ...{ modalShow: false } }
    }


    return state
}

export default tasks