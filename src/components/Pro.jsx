import { Component } from "react";

class Pro extends Component{
    render(){
        const count = 5 ; 
        const list = ['product one' , 'product two', 'product three']
        const mappedList = list.map(item => <li>{item}</li>)
        // const mappedList = list.map((item , index)=> <li key = {index}>{item}</li>)
         return(
            <div>
                <span className=" m-2">product</span>
                <span className=" m-2 btn btn-sm">{count}</span>
                <button>+</button>
                <button>-</button>
                <button>delete</button>
                <ul>
                    {mappedList}
                </ul>

            </div>
         )
    }

    format(){
        return 0;
    }
}

export default Pro;
