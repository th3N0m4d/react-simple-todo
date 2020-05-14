import * as React from 'react'
import * as PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'
import * as R from 'ramda'

import variants from '@/constants/Variants'

const propTypes = {
  author: PropTypes.string,
  completed: PropTypes.bool,
  name: PropTypes.string,
  onConfirm: PropTypes.func,
  onRemove: PropTypes.func,
  onToggle: PropTypes.func,
  variant: PropTypes.oneOf(R.values(variants))
}

const defaultProps = {
  name: 'N/A',
  author: 'Anonymous',
  completed: false,
  variant: variants.info
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
  completed,
  name,
  onRemove,
  onToggle,
  variant
}) => (
    <>
      <div
        className={cx('todo-indicator', {
          [`bg-${variant}`]: true
        })}
      />
      <div className='widget-content p-0'>
        <div className='widget-content-wrapper'>
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
    </>
  )

TaskItem.propTypes = propTypes
TaskItem.defaultProps = defaultProps

export default TaskItem
