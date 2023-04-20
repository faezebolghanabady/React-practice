import { render } from "@testing-library/react";
import { useState } from "react";

const App = () =>{
    const[name , setname] = useState(initialstate = 0);
    const changeName = () => {
        setname(value = 5)
    }
    render(
    <div>
        <p>{name}</p>
        <button onClick={changeName}>تغییر شماره</button>
    </div>

)

}

export default App;