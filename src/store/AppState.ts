import TaskState from './tasks/State'
import ModalState from './modal/State'

interface AppState {
    tasks: TaskState,
    modal: ModalState
}

export default AppState