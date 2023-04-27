import { render } from "@testing-library/react";
import Numbers from './components/Numbers';
import { useState } from "react";
import FCount from './components/FCount';

const App = () => {

   return(
    <div>
      <Numbers/>
    </div>
   )
    }

export default App;