     import FCount from "./FCount";
     import { useState } from "react";

     const FCounts = () => {

      const [product , productName ] = useState([
            {id:1 , count:3 , productName:'laptop'},
            {id:1 , count:3 , productName:'phone'},
            {id:1 , count:3 , productName:'airpods'}
        ])

        return(
            <div>
                {product.map((p , index) => (
                <FCount key={index} productName={p.productName} count={p.count} >
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores nam facilis placeat eligendi nobis, vero laboriosam a odio possimus ea asperiores earum, fuga commodi. Possimus itaque deserunt explicabo? Expedita, deleniti.
                    </p>
                </FCount>
               ))}
            </div>
        )
     }
     export default FCounts;