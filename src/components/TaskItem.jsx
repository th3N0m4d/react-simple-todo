import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

const propTypes = {
  author: PropTypes.string,
  name: PropTypes.string,
  onConfirm: PropTypes.func,
  onRemove: PropTypes.func
}

const defaultProps = {
  name: 'N/A',
  author: 'Anonymous'
}

export const ButtonRemove = ({ onClick }) => (
  <button className='border-0 btn-transition btn btn-outline-danger' onClick={onClick}>
    <FontAwesomeIcon icon={faTrash} />
  </button>
)

export const ButtonConfirm = ({ onClick }) => (
  <button className='border-0 btn-transition btn btn-outline-success' onClick={onClick}>
    <FontAwesomeIcon icon={faCheck} />
  </button>
)

const TaskItem = ({
  author,
  name,
  onConfirm,
  onRemove
}) => (
  <li className='list-group-item'>
    <div className='todo-indicator bg-warning' />
    <div className='widget-content p-0'>
      <div className='widget-content-wrapper'>
        <div className='widget-content-left mr-2'>
          <div className='custom-checkbox custom-control'>
            <input className='custom-control-input' id='exampleCustomCheckbox12' type='checkbox' />
            <label className='custom-control-label' htmlFor='exampleCustomCheckbox12'>&nbsp;</label>
          </div>
        </div>
        <div className='widget-content-left'>
          <div className='widget-heading'>
            {name}
          </div>
          <div className='widget-subheading'><i>By {author}</i></div>
        </div>
        <div className='widget-content-right'>
          <ButtonConfirm onClick={onConfirm} />
          <ButtonRemove onClick={onRemove} />
        </div>
      </div>
    </div>
  </li>
)

TaskItem.propTypes = propTypes
TaskItem.defaultProps = defaultProps

export default TaskItem
