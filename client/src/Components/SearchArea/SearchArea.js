import React, { Component } from "react";
import { Button } from "react-materialize";
import "./style.css";


class SearchArea extends Component {
  constructor (props) {
    super(props);
    this.state = {
      btnClick: false
    }
  }

 handleButton = (e) => {
   e.preventDefault();

   console.log("i've been clicked!", this.props.handleSearchRes());
 }
 render() {
  return (
    <div className="search-area">
      <form action="">
        <input type="text" placeholder="What are you craving?" />
        <Button onClick={this.handleButton}>Search</Button>
      </form>
    </div>
  );
 }
  
};


export default SearchArea;
