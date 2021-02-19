import React, {Component} from "react";

class React_1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      checkBoxAll: false,
      checkBoxList: [
        {id: 1, value: false},
        {id: 2, value: false},
        {id: 3, value: false},
        {id: 4, value: false}
      ]
    }
  }

  handleCheckboxAll = _event => {
    const list = this.state.checkBoxList
    list.forEach(_check => _check.value = _event.target.checked);
    this.setState({
      checkBoxAll: _event.target.checked,
      listCheckBox: list
    })
  }

  handleCheckbox = id => {
    const list = this.state.checkBoxList
    const checkedItem = list.find(el => el.id == id)
    checkedItem.value = !checkedItem.value

    // Check all the items value and return either if they are all checked or not
    const verifyItemValue = () => {
      const itemsValue = list.find(el => el.value === false )
      return itemsValue === undefined
    }
    
    this.setState({
      checkBoxAll: verifyItemValue(),
      checkBoxList: list
    })
  }

  render(){
    // Render the different items 
    const renderItems = () => this.state.checkBoxList.map((item, index) => {
      return (
        <label key={index}>
          <input 
            name={item.id}
            type="checkbox"
            checked={item.value}
            onChange={() => this.handleCheckbox(item.id)} />
          {`item ${item.id}`}
        </label>
      )
    })

    return (
      <div className="container">
        <h3>React: Level 1</h3>

        <label key="all">
          <input 
            name="selectAll"
            type="checkbox"
            checked={this.state.checkBoxAll}
            onChange={this.handleCheckboxAll} />
          {this.state.checkBoxAll ? "Unselect all" : "Select all"}
        </label>
        <br/>
        <br/>

        <div style={{display: "flex", flexDirection: "column"}}>
          {renderItems()}
        </div>
      </div>
    );
  }
}

export default React_1