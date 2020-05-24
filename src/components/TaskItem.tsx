import * as React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'
import Variants from '@/constants/Variants'

interface Props {
  dueDate?: number,
  completed?: boolean,
  name?: string,
  onRemove?: () => void,
  onToggle?: () => void,
}

const renderConfirmButton = (onClick: any) => (
  <Button variant='outline-success' onClick={onClick} data-test="confirm-button">
    <FontAwesomeIcon icon={faCheck} />
  </Button>
)

const renderUndoButton = (onClick: any) => (
  <Button variant='outline-info' onClick={onClick} data-test="undo-button">
    <FontAwesomeIcon icon={faUndo} />
  </Button>
)

const dateFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' }

const getVariant = (time: number | undefined) => {
  if (time) {
    const now = new Date().getTime()

    if (now > time) {
      return Variants.danger
    }
  }

  return Variants.success
}

const TaskItem: React.FunctionComponent<Props> = ({
  dueDate,
  completed,
  name,
  onRemove,
  onToggle,
}) => (
    <>
      <div
        className={cx('todo-indicator', {
          [`bg-${getVariant(dueDate)}`]: true
        })}
      />
      <div className='widget-content p-0'>
        <div className='widget-content-wrapper'>
          <div className='widget-content-left'>
            <div className={cx('widget-heading', {
              'widget-heading--completed': completed
            })}
              data-test="heading"
            >
              {name}
            </div>
            {dueDate && <div className='widget-subheading' data-test="subheading"><i>Due date: {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(dueDate)}</i></div>}
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


export default TaskItem
