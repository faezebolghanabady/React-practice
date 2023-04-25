import { Component } from "react";

class Pro extends Component{
    
    state = {
        count : 2 ,
        productName : 'bag'

    }
   
    render(){
         return(
            <div>
                <span className=" m-2">product</span>
                <br/>
                <span className=" m-2 btn btn-sm">{this.format(this.state.count)}</span>
                <br/>
                <button onClick={this.handleIncrement}> + </button>
                <button onClick={this.handleDecrement}> - </button>
                <button>delete</button>
            </div>
         )
        }
        
            format(){
                if(this.state.count == 0){
                    return 'zero';
                }else{
                    return this.state.count;
                }
                
            }

            handleIncrement = () =>  {
                this.setState({count : this.state.count + 1});

            }

            handleDecrement = () => {
                this.setState({count : this.state.count -1})
            }
    }

export default Pro;
