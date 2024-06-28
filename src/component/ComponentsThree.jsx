import React from 'react'
import { useDispatch } from 'react-redux'
import { decrease } from '../store/action/counter.action'

const ComponentsThree = () => {
    const dispatch = useDispatch()
    const handleDecrease = () => {
        decrease(dispatch) 
    }
  return (
    <div>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default ComponentsThree
