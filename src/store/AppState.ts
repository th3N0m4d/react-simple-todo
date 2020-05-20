import TaskState from './tasks/State'
import ModalState from './modal/State'

interface AppState {
    readonly tasks: TaskState,
    readonly modal: ModalState
}

export default AppState