import { Component } from "react";
import Number from "./Number";

class Numbers extends Component{

    state = {
        products : [
            {id:1 , count:3 , productName:'laptopppp'},
            {id:2 , count:5 , productName:'phone'},
            {id:3 , count:2 , productName:'airpods'}
        ]
    }

    render(){
        return(
            <div>
                <button onClick={this.handleReset} >Reset</button>
               {this.state.products.map((p , index) => (
                <Number onDecrement={this.handleDecrement} onIncrement={this.handleIncrement}
                 onDelete={this.handleDelete} id={p.id} key={index} productName={p.productName} count={p.count} >
                </Number>
               ))}
            </div>
        )
    }

    handleDelete = (productId) =>{
        const newProducts = this.state.products.filter( p => p.id !== productId)
        this.setState({products : newProducts})
    }

    handleReset = () =>{
        const newProducts = this.state.products.map(p =>{
            p.count = 0 ;
            return p
        });
        this.setState({products:newProducts})
    }

    handleIncrement = (productId) => {
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p=> p.id === productId)
        newProducts[index].count +=1;
        this.setState({products : newProducts})
    }

    handleDecrement = (productId) => {
        const newProducts = [...this.state.products];
        const index = newProducts.findIndex(p=> p.id === productId)
        newProducts[index].count -=1;
        this.setState({products : newProducts})
    }

}

export default Numbers;