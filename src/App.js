import { render } from "@testing-library/react";
import { useState } from "react";
import FCount from './components/FCount';
import Number from './components/Number';

const App = () => {

   return(
    <div>
        <h2>class-component-state</h2>
        <Number/>
        <br/>
        <p>--------------------------------------------------------------------------------------</p>
        <h2>function-component-state</h2>
        <FCount/>
    </div>
   )
    }

export default App;