import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import Radium, { StyleRoot } from 'radium';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props);
    this.state = {
      persons: [
        { id: '1*3o', name: 'Robert', age: '36' },
        { id: '25dl', name: 'Jack', age: '53' },
        { id: '$m9p', name: 'Sergio', age: '26' }
      ],
      otherState: 'some other value',
      showPersons: false,
    };
  }

  componentWillMount() {
    console.log(('[App.js] inside componentWillMount'));
  }

  componentDidMount() {
    console.log(('[App.js] inside componentDidMount'));
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
    console.log('[Persons.js] inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />;
      // style[':hover'] = {
      //   backgroundColor: '#35a54b',
      //   border: '2px solid #35a54b'
      // }
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.
  }

}
export default App; //Radium(App)