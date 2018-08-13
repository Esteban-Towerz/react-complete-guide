import React from 'react';


const userInput = (props) => {
    const inputStyle = {
        color: 'slateGrey',
        border: '2px solid blue',
        borderRadius: '4.5px',
        padding: '8px',
    };

    return <input
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName}
    />;
}

export default userInput;