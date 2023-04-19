import './index.css'
import './components/child2'
const App = () => {
    return(
        <div className="matn">
        <h1>...شمارنده من</h1>
        <child2 user={90}/>
        <br/>
        </div>
    )
}

export default App;