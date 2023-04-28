import {useState} from 'react';

const FCount = ({productName}) => {

    const [count , setcount] = useState(0);

    return(
        <div>
        <span className=" m-2">{productName}</span>
        <br/>
        <span>{format(count)}</span>
        <br/>
        <button onClick={handleIncrement}> + </button>
        <br/>
        <button onClick={handleDecrement}> - </button>
        <br/>
        <button onClick={delet}>delete</button>
    </div>
    )

    

    function format (){
        if(count == 0){
        return 'zero';
        }else{
        return count;
        }
    }


    function handleIncrement (){
        setcount(count +1)
       }
    
    function handleDecrement (){
        setcount(count -1)
    }

    function delet (){
        setcount(count = '')

    }

}
export default FCount;