import React from 'react'
import { useDispatch } from 'react-redux'
import { increase } from '../store/action/counter.action'

const ComponentsTwo = () => {
    const dispatch = useDispatch()
    const handleIncrease = () => {
        increase(dispatch) 
    }
  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default ComponentsTwo
