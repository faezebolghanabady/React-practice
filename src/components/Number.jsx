import { Component } from "react";

class Number extends Component {

    render(){

        const {productName} = this.props;
        return(
            <div>
                <span>{this.props.productName}</span>
                <br/>
                <span>{this.Format(this.props.count)}</span>
                <br/>
                <button onClick={this.increment}> + </button>
                <br/>
                <button onClick={this.decrement}> - </button>
                <br/>
                <button onClick={this.handleDelete}> delete </button>
            </div>
        )
    }
    
    Format(){
        if(this.props.count == 0){
            return 'zero'
        }else{
            return this.props.count
        }
    }

    increment = () => {
      this.props.onIncrement(this.props.id)
        
    }

    decrement = () => {
        this.props.onDecrement(this.props.id)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id);
    }
    

}

export default Number;













