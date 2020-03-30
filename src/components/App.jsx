import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'

import TaskItem from './TaskItem'

const App = () => (
  <div className='row d-flex justify-content-center container'>
    <div className='col-md-8'>
      <div className='card-hover-shadow-2x mb-3 card'>
        <div className='card-header-tab card-header'>
          <div className='card-header-title font-size-lg text-capitalize font-weight-normal'><FontAwesomeIcon icon={faTasks} />&nbsp;Task Lists</div>
        </div>
        <div className='scroll-area-sm'>
          <div className='ps-show-limits'>
            <div style={{ position: 'static' }} className='ps ps--active-y'>
              <div className='ps-content'>
                <ul className=' list-group list-group-flush'>

                  <TaskItem />

                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='d-block text-right card-footer'><button className='mr-2 btn btn-link btn-sm'>Cancel</button><button className='btn btn-primary'>Add Task</button></div>
      </div>
    </div>
  </div>
)

export default App
