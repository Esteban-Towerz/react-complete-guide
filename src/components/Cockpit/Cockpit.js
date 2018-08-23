import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    // let classes = ['red', 'bold'].join(' '); //=> 'red bold'
    // ====> dynamically assign and edit classes: ====>
    const assignedClasses = [];
    let btnClass = classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.capitalize); // classes = ['red', 'capitalize']
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <h2 className={assignedClasses.join(' ')}>This is really working</h2>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <button onClick={props.login}>Login</button>
        </Aux>
    )
};

export default cockpit;