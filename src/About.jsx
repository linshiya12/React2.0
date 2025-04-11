import User from "./user";
import Userc from "./Userclass";
function About(){
    return(
        <div style={{height:"100%"}}>
            <h1 >About</h1>
            <User name={"Linshiy"}/>
            <Userc name={"LinshiyClass"}/>
        </div>
    );
}
export default About