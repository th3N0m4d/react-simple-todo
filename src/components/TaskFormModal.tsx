import * as React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

interface Props {
  dueDate?: number,
  name?: string,
  onDateChange(dueDate: number): void,
  onHide(): void,
  onNameChange(name: string): void,
  show?: boolean
}

const TaskFormModal: React.FunctionComponent<Props> = ({
  dueDate,
  name,
  onDateChange,
  onHide,
  onNameChange,
  show,
}) => {

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onNameChange(e.target.value)
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateChange(new Date(e.target.value).getTime())
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
        <Button>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}


export default TaskFormModal
