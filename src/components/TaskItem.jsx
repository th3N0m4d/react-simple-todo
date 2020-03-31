import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'

const propTypes = {
  author: PropTypes.string,
  name: PropTypes.string,
  onConfirm: PropTypes.func,
  onRemove: PropTypes.func,
  onToggle: PropTypes.func
}

const defaultProps = {
  name: 'N/A',
  author: 'Anonymous',
  completed: false
}

const renderConfirmButton = onClick => (
  <Button variant='outline-success' onClick={onClick}>
    <FontAwesomeIcon icon={faCheck} />
  </Button>
)

const renderUndoButton = onClick => (
  <Button variant='outline-info' onClick={onClick}>
    <FontAwesomeIcon icon={faUndo} />
  </Button>
)

const TaskItem = ({
  author,
  name,
  onConfirm,
  onRemove,
  completed,
  onToggle
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
          <div className={cx('widget-heading', {
            'widget-heading--completed': completed
          })}
          >
            {name}
          </div>
          <div className='widget-subheading'><i>By {author}</i></div>
        </div>
        <div className='widget-content-right'>

          {
            completed
              ? renderUndoButton(onToggle)
              : renderConfirmButton(onToggle)
          }
          <Button variant='outline-danger' onClick={onRemove}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>

        </div>
      </div>
    </div>
  </li>
)

TaskItem.propTypes = propTypes
TaskItem.defaultProps = defaultProps

export default TaskItem
