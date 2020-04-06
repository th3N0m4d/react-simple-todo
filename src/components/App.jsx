import React, { useState } from 'react'
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

const propTypes = {
  initialTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      completed: PropTypes.bool
    })
  )
}

const defaultProps = {
  initialTasks: []
}

const App = ({ initialTasks }) => {
  const [modalShow, setModalShow] = useState(false)
  const [tasks, setTasks] = useState(initialTasks)

  const handleOnSave = task => {
    setModalShow(false)
    setTasks(R.append(task, tasks))
  }

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
              <Button variant='primary' onClick={() => setModalShow(true)}>
                Add Task
              </Button>
            </Card.Footer>
          </Card.Body>
        </Card>
        <TaskFormModal
          show={modalShow}
          onSave={handleOnSave}
          onHide={(task) => setModalShow(false)}
        />
      </Col>
    </Row>
  )
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App
