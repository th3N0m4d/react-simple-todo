import * as React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'

import Variants from '@/constants/Variants'

interface Props {
  author?: string,
  completed?: boolean,
  name?: string,
  onRemove?: () => void,
  onToggle?: () => void,
  variant?: Variants
}

const defaultProps = {
  author: 'Anonymous',
  completed: false,
  name: 'N/A',
  variant: Variants.info,
}

const renderConfirmButton = (onClick: any) => (
  <Button variant='outline-success' onClick={onClick}>
    <FontAwesomeIcon icon={faCheck} />
  </Button>
)

const renderUndoButton = (onClick: any) => (
  <Button variant='outline-info' onClick={onClick}>
    <FontAwesomeIcon icon={faUndo} />
  </Button>
)

const TaskItem: React.FunctionComponent<Props> = ({
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

TaskItem.defaultProps = defaultProps

export default TaskItem
