import React, { Component } from 'react';
import axios from 'axios';
import './user.css';

class User extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const search = this.props.location.search; 
    const params = new URLSearchParams(search);
    const id = params.get('id');
    axios
      .get("http://localhost:3000/users.json")
      .then((result) => {
        this.setState({
          user:  result.data.users.filter(item =>
            item.id == id
          )[0]
        });
      });
  }

  render(){
    return (
      <div>
        {this.state.user.name}
      </div>
    );
  }
}

export default User;
