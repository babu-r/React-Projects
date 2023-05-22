import React, { useReducer } from 'react';
import { counterReducer } from '../reducers/counterReducer';
import Navbar from './Navbar';

function Reducer() {
     const initialState = 0;
     const [state,dispatch] = useReducer(counterReducer, initialState)
     return (
          <div id="main">
               <Navbar />
               <div className='main-content'>
                    <h1 id='counter'>{state}</h1>
                    <div id="group-btn">
                         <button id='increment-btn' onClick={() => dispatch({type: "INCREMENT"})}>INCREMENT</button>
                         <button id='decrement-btn' onClick={() => dispatch({type: "DECREMENT"})}>DECREMENT</button>
                    </div>
               </div>
          </div>
     )
}

export default Reducer;