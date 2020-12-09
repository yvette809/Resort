import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import Error from "./pages/Error"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/:slug" component={SingleRoom}/>
        <Route path="/rooms" component={Rooms}/>
        <Route component={Error}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
