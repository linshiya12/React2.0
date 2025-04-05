import { useState } from "react"
const User=(props)=>{
    const [Count,setCount]=useState(0)
    return (
        <div className="user-card">
            <h2>Name:{props.name}</h2>
            <h3>Location:Mannarkkad</h3>
            <h4>Contact:90374658</h4>
            <h4>Count={Count}</h4>
            <button onClick={()=>{setCount(Count=>Count+1)}}>increase</button>
        </div>
    )
}

export default User