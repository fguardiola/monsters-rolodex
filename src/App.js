import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFilter: ""
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));

  }
  render() {
    const { monsters, searchFilter } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFilter.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rodelex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={e => {
            this.setState({ searchFilter: e.target.value });
          }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
