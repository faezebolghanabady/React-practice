import { Component } from "react";

class Pro extends Component{
    render(){
        const count = 5 ; 
        const list = [<li>product one</li> , <li>product two</li>, <li>product three</li>]
         return(
            <div>
                <span className=" m-2">product</span>
                <span className=" m-2 btn btn-sm">{count}</span>
                <button>+</button>
                <button>-</button>
                <button>delete</button>
                <ul>
                    {list}
                </ul>

            </div>
         )
    }

    format(){
        return 0;
    }
}

export default Pro;
