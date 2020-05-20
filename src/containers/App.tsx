import * as React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

import TaskItem from '@/components/TaskItem'
import TaskFormModal from '@/components/TaskFormModal'

import {
  fetchTasks,
  removeTask,
  updateTask,
  createTask
} from '@/store/tasks/actions'

import {
  showModal,
  hideModal
} from '@/store/modal/actions'

import Task from '@/models/Task'
import AppState from '@/store/AppState'

interface Props {
  createTask: typeof createTask,
  fetchTasks: typeof fetchTasks,
  hideModal: typeof hideModal,
  modalShow: boolean,
  removeTask: typeof removeTask,
  showModal: typeof showModal,
  tasks: Task[],
  updateTask: typeof updateTask
}

export class App extends React.Component<Props> {

  static defaultProps = {
    tasks: [],
    modalShow: false
  }

  componentDidMount() {
    this.props.fetchTasks()
  }

  handleOnSave = (task: Task) => {
    this.props.createTask(task)
    this.props.hideModal()
  }

  handleOnModalHide = () => {
    this.props.hideModal()
  }

  handleOnModalShow = () => {
    this.props.showModal()
  }

  handleOnTaskRemove = (taskId: string) => {
    this.props.removeTask(taskId)
  }

  handleOnToggleCompletion = (task: Task) => {
    const { completed } = task
    this.props.updateTask({ ...task, completed: !completed })
  }

  render() {
    const { tasks, modalShow } = this.props

    return (
      <Row className='justify-content-center container'>
        <Col md='8'>
          <Card>
            <Card.Header>
              <FontAwesomeIcon icon={faTasks} />
              &nbsp;Task Lists
            </Card.Header>
            <Card.Body>
              <div className='scroll-area-sm'>
                <div className='ps-show-limits'>
                  <div style={{ position: 'static' }} className='ps ps--active-y'>
                    <div className='ps-content'>
                      <ListGroup variant='flush'>
                        {
                          tasks.map(task => (
                            <ListGroup.Item key={task.id}>
                              <TaskItem
                                {...task}
                                // tslint:disable-next-line: jsx-no-lambda
                                onRemove={() => this.handleOnTaskRemove(task.id)}
                                // tslint:disable-next-line: jsx-no-lambda
                                onToggle={() => this.handleOnToggleCompletion(task)}
                              />
                            </ListGroup.Item>
                          ))
                        }
                      </ListGroup>
                    </div>
                  </div>
                </div>
              </div>
              <Card.Footer className='text-right'>
                <Button variant='primary' onClick={this.handleOnModalShow}>
                  Add Task
                </Button>
              </Card.Footer>
            </Card.Body>
          </Card>
          {/* <TaskFormModal
            show={modalShow}
            onSave={this.handleOnSave}
            onHide={this.handleOnModalHide}
          /> */}
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (store: AppState) => {
  return {
    tasks: store.tasks.tasks,
    modalShow: store.modal.modalShow
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    showModal: () => dispatch(showModal()),
    hideModal: () => dispatch(hideModal()),
    removeTask: (taskId: string) => dispatch(removeTask(taskId)),
    createTask: (task: Task) => dispatch(createTask(task)),
    updateTask: (task: Task) => dispatch(updateTask(task)),
    fetchTasks: () => dispatch(fetchTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)