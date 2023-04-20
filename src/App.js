import { Component } from "react";

class App extends Component{

    state = {
        family : 'bolghanabady',
        name : 'faeze', 
        id : 18

    }

    render(){
        const {family , name , id} = this.state
        return(
            <div>
                <header>
                    <h1>شمارنده من</h1>
                </header>
                <p>{name}</p>
                <p>{family}</p>
                <p>{id}</p>
            </div>
        )
    }
}

export default App;