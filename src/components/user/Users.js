import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Pagination from '../pagination/Pagination'
import './user.css';

class Users extends Component{
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      pages: [],
      itemsPerPage: 3,
      selectedPage: {
        number: 1
      }
    }
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/users.json")
      .then((result) => {
        let pages = Math.ceil(result.data.users.length / 3);
        for(let i = 0; i < pages; i++){
          this.setState((prevState) => ({
            pages: prevState.pages.concat({
              number: i + 1
            }),
            users: result.data.users
          }));
        }
      });
  }

  changePage(pageNumber){
    this.setState({ selectedPage: {
        number: pageNumber
      }
    });
  }

  render(){
    const users = this.state.users.filter((item, index) => {
      return index < (this.state.selectedPage.number * 3) &&
        index >= ((this.state.selectedPage.number - 1) * 3);
    }).map((item, index) =>
      <Link key={index} to={{ pathname: '/user/'+ item.id }}>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="app-users-item">
            <div className="col-xs-12 app-no-padding">
              <div className="app-users-item-image">
                <img src={item.img} alt={item.name}/>
              </div>
            </div>
            <div className="app-users-item-name col-xs-12 text-center">{item.name} {item.surname}</div>
          </div>
        </div>
      </Link>
    );
    return (
      <div>
        <div className="app-users container">
            {users}
        </div>
        <Pagination changePage={this.changePage}
          pages={this.state.pages}
          selectedPage={this.state.selectedPage}>
        </Pagination>
      </div>
    );
  }
}

export default Users;
