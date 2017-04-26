import React, { Component } from 'react';
import axios from 'axios';
import './user.css';
import '../../index.css';

class User extends Component{
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/users.json")
      .then((result) => {
        this.setState({
          users: result.data.users
        });
      });
  }

  render(){
    const users = this.state.users.map((item, index) =>
      <div key={index} className="col-xs-12 col-sm-6 col-md-4">
        <div className="app-users-item">
          <div className="col-xs-12 app-no-padding">
            <div className="app-users-item-image">
              <img src={item.img} alt={item.name}/>
            </div>
          </div>
          <div className="app-users-item-name col-xs-12 text-center">{item.name} {item.surname}</div>
        </div>
      </div>
    );
    return (
      <div className="app-users container">
          {users}
      </div>
    );
  }
}

export default User;
