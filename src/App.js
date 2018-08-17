import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: '1*3o', name: 'Robert', age: '36' },
      { id: '25dl', name: 'Jack', age: '53' },
      { id: '$m9p', name: 'Sergio', age: '26' }
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };
    // const person = Object.assign({}, this.state.persons[personIndex]) other way

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    // inline styles
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      border: '1px solid royalblue',
      borderRadius: '3.5px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;