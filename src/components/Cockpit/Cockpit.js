import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    // let classes = ['red', 'bold'].join(' '); //=> 'red bold'
    // ====> dynamically assign and edit classes: ====>
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.capitalize); // classes = ['red', 'capitalize']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <h1 className={assignedClasses.join(' ')}>This is really working</h1>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    )
};

export default cockpit;