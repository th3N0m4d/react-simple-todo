const createTask = task => ({
  type: 'CREATE_TASK',
  payload: {
    ...task
  }
})

const showModal = () => ({
  type: 'SHOW_MODAL',
  payload: {
    modalShow: true
  }
})

const hideModal = () => ({
  type: 'HIDE_MODAL',
  payload: {
    modalShow: false
  }
})

export { createTask, showModal, hideModal }
