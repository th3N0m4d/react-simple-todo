import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import TaskItem from './TaskItem'
import TaskFormModal from './TaskFormModal'
import { variants } from '../consts'

class App extends Component {
  state = {
    modalShow: false,
    tasks: []
  }

  static propTypes = {
    initialTasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        author: PropTypes.string,
        variant: PropTypes.oneOf(R.values(variants)),
        completed: PropTypes.bool
      })
    )
  }

  static defaultProps = {
    initialTasks: []
  }

  componentDidMount () {
    const { initialTasks } = this.props

    this.setState({
      tasks: initialTasks
    })
  }

  handleOnSave = task => {

  }

  handleOnModalHide = () => {
    this.setState({
      modalShow: false
    })
  }

  handleOnModalShow = () => {
    this.setState({
      modalShow: true
    })
  }

  render () {
    const { tasks, modalShow } = this.state

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
                              <TaskItem {...task} />
                            </ListGroup.Item>
                          ))
                        }
                      </ListGroup>
                    </div>
                  </div>
                </div>
              </div>
              <Card.Footer className='text-right'>
                <Button variant='link'>
                Cancel
                </Button>
                <Button variant='primary' onClick={this.handleOnModalShow}>
                Add Task
                </Button>
              </Card.Footer>
            </Card.Body>
          </Card>
          <TaskFormModal
            show={modalShow}
            onSave={this.handleOnSave}
            onHide={this.handleOnModalHide}
          />
        </Col>
      </Row>
    )
  }
}

export default App
