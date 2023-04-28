import { Component } from "react";
import Number from "./Number";

class Numbers extends Component{

    state = {
        products : [
            {id:1 , count:3 , productName:'laptop'},
            {id:1 , count:3 , productName:'phone'},
            {id:1 , count:3 , productName:'airpods'}
        ]
    }




    

    // state = {
    //     products : [
    //         {id:1 , count:3 , productName:'laptop'},
    //         {id:1 , count:3 , productName:'phone'},
    //         {id:1 , count:3 , productName:'airpods'}
    //     ]
    // }

    render(){
        return(
            <div>
               {this.state.products.map((p , index) => (
                <Number key={index} productName={p.productName} count={p.count} >
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores nam facilis placeat eligendi nobis, vero laboriosam a odio possimus ea asperiores earum, fuga commodi. Possimus itaque deserunt explicabo? Expedita, deleniti.
                    </p>
                </Number>
               ))}
            </div>
        )
    }

}

export default Numbers;