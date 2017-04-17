import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  onChange(e){
    this.setState({
      value: e.target.value
    });
  }

  getValidationState(){
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }
  render(){
    return (
      <form>
        <FormGroup
          controlId="home-form"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.onChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    )
  }
}

export default Home;
