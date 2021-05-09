import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

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
      robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    );

    return !robots.length ? (
      <h1>Loading..</h1>
    ) : (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox filter={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filtered} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
