import React, { Component } from 'react';
import axios from 'axios';
import './user.css';

class User extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      editMode: false
    };
    this.editUser = this.editUser.bind(this);
    this.confirmEditUser = this.confirmEditUser.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onSurnameChange = this.onSurnameChange.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("http://localhost:3000/users.json")
      .then((result) => {
        this.setState({
          user:  result.data.users.filter(item =>
            item.id === parseInt(id, 10)
          )[0]
        });
      });
  }

  editUser() {
    this.setState((prevState) => ({
      editMode: !prevState.editMode
    }));
  }

  confirmEditUser(){
    console.log(`Name: ${this.state.user.name} Surname: ${this.state.user.surname}` );
    this.props.history.push('/users');
  }

  onNameChange(event){
    const user = this.state.user;
    user.name = event.target.value;
    this.setState({
      user: user
    });
  }

  onSurnameChange(event){
    const user = this.state.user;
    user.surname = event.target.value;
    this.setState({
      user: user
    });
  }

  render(){
    return (
      <div className="app-user-view col-xs-12">
        <div>
          <img src={this.state.user.img} alt={this.state.user.name}/>
        </div>
        <div className="app-user-text">
          <div>
            <label>Name:</label>
            {
              this.state.editMode ?
              <input type="text" value={this.state.user.name} onChange={this.onNameChange}/>:
              <span> {this.state.user.name}</span>
          }
          </div>
          <div>
            <label>Surname:</label>
            {
              this.state.editMode ?
              <input type="text" value={this.state.user.surname} onChange={this.onSurnameChange} /> :
              <span> {this.state.user.surname}</span>
            }
          </div>
        </div>
          {
            this.state.editMode ?
            <div>
              <button className="btn btn-primary" onClick={this.confirmEditUser}>Confirm</button>
              <button className="btn btn-secondary" onClick={this.editUser}>Cancel</button>
            </div> :
            <div>
              <button className="btn btn-primary" onClick={this.editUser}>Edit</button>
            </div>

          }
      </div>
    );
  }
}

export default User;
