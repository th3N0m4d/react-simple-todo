import * as React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Task from '@/models/Task'

interface Props {
  onHide(): void,
  onSave(task: Task): void,
  show?: boolean
}

const TaskFormModal: React.FunctionComponent<Props> = ({
  onHide,
  onSave,
  show,
}) => {

  const [name, setName] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(e.target.value)
  }

  const handleOnSave = () => {
    const task: Task = {
      completed: false,
      dueDate: new Date(dueDate).getTime(),
      id: '',
      name,
    }

    onSave(task)

    setName('')
    setDueDate('')

  }

  return (
    <Modal
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered={true}
      onHide={onHide}
      show={show}
    >
      <Modal.Header closeButton={true}>
        <Modal.Title id='contained-modal-title-vcenter'>
          Create
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Due date</Form.Label>
            <Form.Control
              type='date'
              name='dueDate'
              value={dueDate}
              onChange={handleDateChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-secondary' data-test="close-button" onClick={onHide}>Close</Button>
        <Button onClick={handleOnSave} data-test="save-button">Save</Button>
      </Modal.Footer>
    </Modal>
  )
}


export default TaskFormModal
