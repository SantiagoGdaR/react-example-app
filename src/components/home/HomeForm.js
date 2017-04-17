import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


class HomeForm extends Component{
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.props.inputValueChanged(e.target.value);
  }

  getValidationState(){
    const length = this.props.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }
  render(){
    return (
      <form>
        <FormGroup
          controlId="app-home-form"
          className="app-home-form"
          validationState={this.getValidationState()}
        >
          <ControlLabel className="form-label">Form input with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.props.value}
            placeholder="Enter text (at least 10 characters)"
            onChange={this.onChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    )
  }
}

export default HomeForm;
