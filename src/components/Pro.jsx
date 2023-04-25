import { Component } from "react";

class Pro extends Component{
    render(){
        const count = 2 ; 
       
         return(
            <div>
                <span className=" m-2">product</span>
                <br/>
                <span className=" m-2 btn btn-sm">{this.format(count)}</span>
                <br/>
                <button>+</button>
                <button>-</button>
                <button>delete</button>
            </div>
         )
        }
        
            format(count){
                if(count == 8){
                    return 'zero';
                }else{
                    return count;
                }
                
            }
    }

export default Pro;
