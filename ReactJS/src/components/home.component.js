import React, { Component } from "react";

import UserService from "../services/user.service";
import imm from "../components/q.png";
import "../App.css"
import Cards from "./cardshome";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }
  

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        {/* <header className="card2">
          <h3>{this.state.content}</h3>

          <img className="img12" src={imm} height="120px" width="120px"/>
        </header> */}

        <Cards/>
      </div>
    );
  }
}
