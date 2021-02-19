import React, {Component} from "react";

class FizzBuzz extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: "",
      array: []
    }
  }

  defineArray = number => {
    const arrayedNumber = []
    for (let i = 1; i <= number; i++) {
      let text = `${i}`
      const fizz = !(i % 3)
      const buzz = !(i % 5)
      if(fizz && buzz){
        text = "FizzBuzz"
      }else if(fizz){
        text = "Fizz"
      }else if(buzz){
        text = "Buzz"
      }
      arrayedNumber.push(text)
    }
    this.setState({array: arrayedNumber})
  }

  handleChange = _event => {
    this.setState({number: _event.target.value})
    this.defineArray(parseInt(_event.target.value, 10))
  }

  render(){
    const array = this.state.array

    const renderArray = () => array.map((item, index) => {
      return(
        <p key={index} className="fbg-element">{item}</p>
      )
    })

    return (
      <div className="container">
        <h3>Algo: FizzBuzz</h3>
        <input 
          name="number"
          type="number"
          className="my-input"
          value={this.state.number}
          onChange={this.handleChange}
          placeholder="Type your number here" />
        {this.state.number !== "" ? 
          <div>
            <p>Your FizzBuzz:</p>
            <div className="fizzbuzz-grid">{renderArray()}</div>
          </div>
        :null}
      </div>
    );
  }
}

export default FizzBuzz