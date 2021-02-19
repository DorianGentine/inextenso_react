import React, {Component} from "react";

import increment from "./increment_algo"

class NumberIncrement extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: "",
      array: []
    }
  }

  defineArray = number => {
    const arrayedNumber = []
    const stringNumber = number.toString()
    for (let i = 0; i < stringNumber.length; i++) {
      const element = stringNumber[i];
      arrayedNumber.push(element)
    }
    this.setState({array: arrayedNumber})
  }

  handleChange = _event => {
    this.setState({number: _event.target.value})
    this.defineArray(_event.target.value)
  }

  render(){
    const array = this.state.array

    const renderArray = () => array.map((item, index) => {
      return(
        <span key={index}>{`${item}${index !== array.length - 1 ? "," : ""}`}</span>
      )
    })

    return (
      <div className="container">
        <h3>Algo: Custom number type increment</h3>
        <input 
          name="number"
          type="number"
          className="my-input"
          value={this.state.number}
          onChange={this.handleChange}
          placeholder="Type your number here" />
        {this.state.number !== "" ? 
          <div>
            <p>Your array:</p>
            <p>[{renderArray()}]</p>
            <button 
              onClick={ () =>
                this.setState({
                  array: increment(array)
                })
              } 
              className="my-button">
                Increment
            </button>
          </div>
        :null}
      </div>
    );
  }
}

export default NumberIncrement