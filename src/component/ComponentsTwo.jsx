import React from 'react'
import { useDispatch } from 'react-redux'
// import { increase } from '../store/action/counter.action'
import ComponentsThree from './ComponentsThree'
import { increase, increasePayload } from '../store/slice/counter.slice'

const ComponentsTwo = () => {
    const dispatch = useDispatch()
    const handleIncrease = () => {
        // increase(dispatch) 
        dispatch(increase())
    }

    const handleIncreasePayload = () => {
      dispatch(increasePayload(3)) 
    }
  return (
    <div>
      ComponentsTwo
      <button className='bg-blue-400 px-3 rounded-lg' onClick={handleIncrease}>Increase</button>
      <button className='bg-purple-400 px-3 rounded-lg' onClick={handleIncreasePayload}>IncreasePayload</button>
      <ComponentsThree/>
    </div>
  )
}

export default ComponentsTwo
