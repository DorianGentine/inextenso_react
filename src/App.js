import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './app.css';

import Navbar from "./navbar"
import React_1 from "./React_1/react_1"
import React_2 from "./React_2/react_2"
import NumberIncrement from "./Number_increment/number_increment"
import Home from "./home"

export default function App() {
  return (
    <Router>
        <Navbar/>

        <Switch>
          <Route path="/level_1" children={<React_1 />} />
          <Route path="/level_2" children={<React_2 />} />
          <Route path="/number_type_increment" children={<NumberIncrement />} />
          <Route path="/" children={<Home />} />
        </Switch>
    </Router>
  );
}