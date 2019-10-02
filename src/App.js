import React, { Component } from "react";
import User from "./Components/User";
import Followers from "./Components/Followers"
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    user: [],
    followers: []
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/itava0")
      .then(res => {
        const data = [{ ...res.data }];
        this.setState({
          user: data
        });
      })
      axios.get("https://api.github.com/users/itava0/followers").then(res => {
        this.setState({
          followers: res.data
        });
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="header">Github User</h1>
        <User user={this.state.user} />
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
