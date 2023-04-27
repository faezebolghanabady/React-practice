import { Component } from "react";

class Number extends Component {

    state = {
        count : 5,
        poductName :'bag'
    }

    render(){
        return(
            <div>
                <span>product</span>
                <br/>
                <span>{this.Format(this.state.count)}</span>
                <br/>
                <button onClick={this.increment}> + </button>
                <br/>
                <button on onClick={this.decrement}> - </button>
                <br/>
                <button onClick={this.delet}> delete </button>
            </div>
        )
    }
    
    Format(){
        if(this.state.count == 0){
            return 'zero'
        }else{
            return this.state.count
        }
    }

    increment = () => {
        this.setState({count : this.state.count + 1 })
        
    }

    decrement = () => {
        this.setState({count : this.state.count -1})
    }

    delet = () => {
        this.setState({count : ''})
    }
    

}

export default Number;













