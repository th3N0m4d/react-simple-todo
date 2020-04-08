import { variants } from './consts'

const initialState = {
  tasks: [
    { id: 0, name: 'Buy wine', variant: variants.dark },
    { id: 1, name: 'Buy cheese', completed: true, variant: variants.warning },
    { id: 2, name: 'Prepare for interview', completed: true, author: 'Edie', variant: variants.info },
    { id: 3, name: 'Meditate', completed: true, author: 'Edie' }
  ],
  modalShow: false
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return { ...state, ...action.payload }
    case 'HIDE_MODAL':
      return { ...state, ...action.payload }
    default:
      break
  }
  return state
}

export default todo
