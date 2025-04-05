import React from "react"
class Userc extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            count1:1
        }
    }

    componentDidMount(){
        console.log("COMPONENTDIDMOUNT")
    }
    render() {
        const {count,count1}=this.state;
        return (
            <div className="user-card">
                <h2>Name:{this.props.name}</h2>
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