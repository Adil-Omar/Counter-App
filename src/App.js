import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {incNumber,decNumber} from './action/index'

const App = () => {
  const myState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className='container'>
        <h1>Increment/Decrement counter</h1>
        <h4>using Reaat and Redux</h4>
        <div className='quantity'>
          <a className='quantity_minus' title="Decrememt" 
          onClick={()=>dispatch(decNumber())}><span>-</span></a>
          <input name="quantity" type="text" className="quantity_input" value={myState} />
          <a className='quantity_plus' title="Incrememt" 
          onClick={()=>dispatch(incNumber())}><span>+</span></a>
        </div>
      </div>
    </>
  )
}

export default App

