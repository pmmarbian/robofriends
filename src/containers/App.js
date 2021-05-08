import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  state = {
    robots: [],
    searchfield: "",
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const { robots, searchfield } = this.state;
    const filtered = robots.filter((robot) =>
      robot.name
        .toLocaleLowerCase()
        .includes(searchfield.toLocaleLowerCase())
    );

    return !robots.length ?
    <h1>Loading..</h1> :
    (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox filter={this.onSearchChange} />
        <Scroll>
          <CardList robots={filtered} />
        </Scroll>
      </div>
    )
  }
}

export default App;
