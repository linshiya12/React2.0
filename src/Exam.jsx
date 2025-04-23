// import React from 'react'
// import { useReducer } from 'react'

import { useContext } from "react"
import { counterContext } from "./Exam2"

//     const initialState={count:0}

//     function counterReducer(state,action){
//         switch(action.type){
//             case 'incriment':
//                 return {count:state.count+1}
//             case 'decrement':
//                 return {count:state.count-1}
//             default:
//                 return state
//         }

//     }


const Exam = () => {
    const {state,dispatch}=useContext(counterContext)
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:'incriment'})}>incriment</button>
        <button onClick={()=>dispatch({type:'decriment'})}>dicriment</button>
    </div>
  )
}

export default Exam

