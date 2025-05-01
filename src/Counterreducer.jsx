import React from 'react'
import { useReducer } from 'react'


const initialState={count:0}
const counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case incriment:
            return{count:state.count+1}
        case decriment:
            return{count:state.count-1}
        default:
            return state
    }

}
const Counter = () => {
    const {count,dispatch}=useReducer(initialState,counterReducer)
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:count})}>incriment</button>
    </div>
  )
}

export default Counter