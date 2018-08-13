import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Robert', age: '36' },
      { name: 'Jack', age: '53' },
      { name: 'Sergio', age: '26' }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => { //method name convention
    //DON'T DO THIS: this.state.person[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: '24' },
        { name: 'Sergio', age: '25' },
        { name: 'Juan', age: '26' }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Oscar', age: '24' },
        { name: event.target.value, age: '25' },
        { name: 'Juan', age: '26' }
      ]
    })
  }

  // usernameHandler = (event) => {
  //   this.setState({ username: event.target.value })
  // }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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
    }

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Erick')}
            changed={this.nameChangeHandler}>My Hobbies: Workout</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
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

/* <button onClick={() => this.switchNameHandler('Alejandro!!')}>Switch Name</button> = inefficient!
click = { this.switchNameHandler.bind(this, 'Erick') } > My Hobbies: Workout</Person > use this better!*/

/* <UserInput
      changed={this.usernameHandler}
      currentName={this.state.username} />
    <UserOutput userName={this.state.username} /> */

      // { this.state.showPersons ?
      //   <div>
      //     <Person
      //       name={this.state.persons[0].name}
      //       age={this.state.persons[0].age} />
      //     <Person
      //       name={this.state.persons[1].name}
      //       age={this.state.persons[1].age}
      //       click={this.switchNameHandler.bind(this, 'Erick')}
      //       changed={this.nameChangeHandler}>My Hobbies: Workout</Person>
      //     <Person
      //       name={this.state.persons[2].name}
      //       age={this.state.persons[2].age} />
      //   </div> : null