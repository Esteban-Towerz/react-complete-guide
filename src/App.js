import React, { Component } from 'react';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
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
      backgroundColor: '#db3236',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '3.5px',
      border: '2px solid #db3236'
      // ':hover': {
      //   backgroundColor: '#c42d30',
      //   border: '2px solid #c42d30'
      // }
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

      style.backgroundColor = '#3cba54';
      style.border = '2px solid #3cba54';
      // style[':hover'] = {
      //   backgroundColor: '#35a54b',
      //   border: '2px solid #35a54b'
      // }
    }

    // let classes = ['red', 'bold'].join(' '); //=> 'red bold'
    // ====> dynamically assign and edit classes: ====>
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('capitalize'); // classes = ['red', 'capitalize']
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1 className={classes.join(' ')}>This is really working</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
      // </StyleRoot>
    );
  }

}
export default App; //Radium(App)