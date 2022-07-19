import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Switch from "react-router-dom"
import Register from './components/Registration'

function App() {
  return (
    <div className="App">
        <img src = "careLogo.png" alt="Christiana Care Logo" width="200"/>
        <p class="top">Hello World</p>
        <Register/>
    </div>
  );
}

export default App;