import React, {Component} from "react";

import ResultsRenderer from "./resultsRenderer"

class React_2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: ""
    }
  }

  handleChange = _event => {
    this.setState({query: _event.target.value})
  }

  render(){

    return (
      <div className="container">
        <h3>React: Level 2</h3>
        <input 
          name="query"
          type="text"
          className="my-input"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Type your research here" />

        <ResultsRenderer query={this.state.query} />

      </div>
    );
  }
}

export default React_2