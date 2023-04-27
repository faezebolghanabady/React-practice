import { Component } from "react";
import Number from "./Number";

class Numbers extends Component{
    render(){
        return(
            <div>
                <Number productName='laptop'/>
                <h2 >------------------------------------------------------------------</h2>
                <br/>
                <Number productName='phone'/>
                <h2>------------------------------------------------------------------</h2>
                <br/>
                <Number productName='airpods'/>
            </div>
        )
    }

}

export default Numbers;