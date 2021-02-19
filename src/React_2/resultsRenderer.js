import React, { Component } from 'react';

import Result from "./result"

class ResultsRenderer extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: null,
      prevQuery: ""
    }
  }

  loadData = () => {
    fetch(`https://api.github.com/search/users?q=${this.props.query}`)
    .then(r => r.json())
    .then(body => {
      console.log('body', body)
      this.setState({data: body})
    })
    .catch(error => {
      console.error('error', error)
    })
  }

  static getDerivedStateFromProps(props, state) {
    if (props.query !== state.prevQuery) {
      return {
        data: null,
        prevQuery: props.query,
      };
    }

    return null;
  }

  componentDidMount(){
    if (this.props.query !== "") {
      this.loadData()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data === null && this.props.query !== "") {
      this.loadData()
    }
  }
  
  render(){
    const data = this.state.data
    let text = "Please, make a research to display the results"
      
    if(data && data.items){
      const resultsLength = data.items.length
      text = `${resultsLength == 0 ? "No results" : `${resultsLength} result${resultsLength == 1 ? "" : "s"} on ${data.total_count}` }`
      
      const renderResults = items => items.map((item, index) => {
        return (
          <Result item={item} index={index} />
        )
      })

      return (
        <div>
          <h4>{text}</h4>
          <div className="results-grid">
            {renderResults(data.items)}
          </div>
        </div>
      )
    }
    return <h4>{data && data.message ? data.message : "Please, make a research to display the results"}</h4>
  }
}

export default ResultsRenderer