import React from 'react'
import { useDispatch } from 'react-redux'
import { decrease } from '../store/slice/counter.slice'
// import { decrease } from '../store/action/counter.action'

const ComponentsThree = () => {
    const dispatch = useDispatch()
    const handleDecrease = () => {
        // decrease(dispatch) Redux
        dispatch(decrease())
    }
  return (
    <div>
      ComponentsThree
      <button className=' bg-red-400 px-3 rounded-lg' onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default ComponentsThree
