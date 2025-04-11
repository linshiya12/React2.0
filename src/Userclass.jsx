import React from "react"
class Userc extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            count1:1,
            userInfo:{
                login:"dumm",
                avatar_url:" "
            }
        }
    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/linshiya12")
        const json=await data.json()
        console.log(json)
        this.setState({
            userInfo:json
        })
    }
    render() {
        const {count,count1}=this.state;
        const {login,avatar_url}=this.state.userInfo
        return (
            <div className="user-card">
                <h2>Name:{login}</h2>
                <img src={avatar_url} alt="" />
                <h3>Location:Mannarkkad</h3>
                <h4>Contact:90374658</h4>
                <h3>Count:{count}</h3>
                <h3>Count1:{count1}</h3>
                <button onClick={()=>{this.setState({count:count+1})}}>increase</button>
            </div>
        )
    }
}

export default Userc