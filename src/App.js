import { render } from "@testing-library/react";
import { useState } from "react";
import Pro, { Product } from './components/Pro'

const App = () => {

   return(
    <div>
        <h1>jsx</h1>
        <Pro/>
    </div>
   )
    }

export default App;