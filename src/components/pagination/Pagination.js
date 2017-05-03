import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props){
    super(props);
    this.pageClick = this.pageClick.bind(this);
    this.state = {
      selectedPage: this.props.selectedPage
    }
  }
  pageClick(e){
    let pageNumber = parseInt(e.target.innerText, 10);
    this.setState({
      selectedPage: {
        number: pageNumber
      }
    });
    this.props.changePage(pageNumber);
  }
  render(){
    const uiPages = this.props.pages.map((page) =>
      <li key={page.number} className={this.state.selectedPage.number === page.number ? 'active' : ''}>
        <a href="#" onClick={this.pageClick}>{page.number}</a>
      </li>
    );
    return (
      <ul className="pagination">
        {uiPages}
      </ul>
    )
  }
}
export default Pagination;
