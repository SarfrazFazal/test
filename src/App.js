
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>

        <Route path="/signup">
          <Signup/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/news">
          <News/>
        </Route>

        <Route path="/">
      <Home/>
          </Route>

        </Switch>
     
    </div>
    </Router>
    
  );
}

export default App;
