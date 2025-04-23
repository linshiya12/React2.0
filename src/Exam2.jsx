import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'
export const counterContext=createContext()

const initialState={
    count:0
}
function counterReducer(state,action){
    switch(action.type){
        case 'incriment':
            return {count:state.count+1}
        case 'decriment':
            return {count:state.count-1}
        default:
            return state
    }
}

const Exam2 = ({children}) => {
    const [state,dispatch]=useReducer(counterReducer,initialState)
  return (
    <counterContext.Provider value={{state,dispatch}}>
        {children}
    </counterContext.Provider>
    
  )
}

export default Exam2