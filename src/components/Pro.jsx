import { Component } from "react";

class Pro extends Component{
    count = 2 ; 
   
    render(){
         return(
            <div>
                <span className=" m-2">product</span>
                <br/>
                <span className=" m-2 btn btn-sm">{this.format(this.count)}</span>
                <br/>
                <button>+</button>
                <button>-</button>
                <button>delete</button>
            </div>
         )
        }
        
            format(){
                if(this.count == 8){
                    return 'zero';
                }else{
                    return this.count;
                }
                
            }
    }

export default Pro;
