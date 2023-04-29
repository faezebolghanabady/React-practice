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
               {this.state.products.map((p , index) => (
                <Number onDelete={this.handleDelete} id={p.id} key={index} productName={p.productName} count={p.count} >
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores nam facilis placeat eligendi nobis, vero laboriosam a odio possimus ea asperiores earum, fuga commodi. Possimus itaque deserunt explicabo? Expedita, deleniti.
                    </p>
                </Number>
               ))}
            </div>
        )
    }

    handleDelete = (productId) =>{
        const newProducts = this.state.products.filter( p => p.id !== productId)
        this.setState({products : newProducts})
    }

}

export default Numbers;