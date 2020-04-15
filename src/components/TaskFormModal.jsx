import React from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import * as R from 'ramda'

import variants from '../constants/Variants'

const defaultTask = {
  name: '',
  author: '',
  variant: variants.info,
  completed: false
}

const propTypes = {
  id: PropTypes.string,
  completed: PropTypes.bool
}

const defaultProps = {
  id: '0',
  completed: false,
  task: defaultTask
}

const mapVariantsToOption = value => <option value={value} key={value}>{value}</option>

const TaskFormModal = ({ task, onHide, onSave, labels, show }) => {
  const [formFields, setFormField] = React.useState(task)

  const handleOnChange = e => {
    setFormField(R.mergeRight(
      formFields,
      { [e.target.name]: e.target.value }
    ))
  }

  const handleOnSave = e => {
    onSave(formFields)
    setFormField(defaultTask)
  }

  return (
    <Modal
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      onHide={onHide}
      show={show}
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
            Create / Edit Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter task name'
              name='name'
              value={formFields.name}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control
              type='text'
              placeholder='Authors name'
              name='author'
              value={formFields.author}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Label color</Form.Label>
            <Form.Control as='select' name='variant' value={formFields.variant} onChange={handleOnChange}>
              {
                R.compose(
                  R.values,
                  R.map(mapVariantsToOption)
                )(variants)

              }
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Check
              type='checkbox'
              label='Completed'
              name='completed'
              value={formFields.completed}
              onChange={handleOnChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-secondary' onClick={onHide}>Close</Button>
        <Button onClick={handleOnSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

TaskFormModal.propTypes = propTypes
TaskFormModal.defaultProps = defaultProps

export default TaskFormModal
