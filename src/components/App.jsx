import React, { Component } from 'react'
import { connect } from 'react-redux'
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
import variants from '../constants/Variants'
import { showModal, hideModal, fetchTasks } from '../actions'

export class App extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        author: PropTypes.string,
        variant: PropTypes.oneOf(R.values(variants)),
        completed: PropTypes.bool
      })
    ),
    modalShow: PropTypes.bool
  }

  static defaultProps = {
    tasks: [],
    modalShow: false
  }

  componentDidMount () {
    this.props.dispatch(fetchTasks())
  }

  handleOnSave = task => {

  }

  handleOnModalHide = () => {
    this.props.dispatch(hideModal())
  }

  handleOnModalShow = () => {
    this.props.dispatch(showModal())
  }

  render () {
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

const mapStateToProps = ({ tasks, modalShow }) => {
  return {
    tasks,
    modalShow
  }
}

const ConnectedApp = connect(mapStateToProps)(App)

export default ConnectedApp
