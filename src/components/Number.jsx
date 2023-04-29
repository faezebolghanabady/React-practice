import { Component } from "react";

class Number extends Component {

    state = {
        count : this.props.count,
    }

    render(){

        const {productName} = this.props;
        return(
            <div>
                <span>{productName}</span>
                <br/>
                <span>{this.Format(this.state.count)}</span>
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
        if(this.state.count == 0){
            return 'zero'
        }else{
            return this.state.count
        }
    }

    increment = () => {
        this.setState({count : this.state.count + 1 });
        
    }

    decrement = () => {
        this.setState({count : this.state.count -1});
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id);
    }
    

}

export default Number;













