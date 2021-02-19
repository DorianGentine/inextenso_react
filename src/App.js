import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './app.css';

import Navbar from "./navbar"
import React_1 from "./React_1/react_1"
import React_2 from "./React_2/react_2"

export default function ParamsExample() {
  return (
    <Router>
        <Navbar/>

        <Switch>
          <Route path="/level_1" children={<React_1 />} />
          <Route path="/level_2" children={<React_2 />} />
        </Switch>
    </Router>
  );
}