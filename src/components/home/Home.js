import React, { Component } from 'react';
import './home.css';
import HomeForm from './HomeForm'

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.valueChanged = this.valueChanged.bind(this);
  }
  valueChanged(value){
    this.setState({
      value: value
    });
  }

  render(){
    return (
      <div className="app-home">
        <HomeForm inputValueChanged={this.valueChanged} value={this.state.value}/>
        <div>
          <label>Input Value:</label>
          {this.state.value}
        </div>
      </div>
    )
  }
}

export default Home;
