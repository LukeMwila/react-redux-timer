import React from 'react';

const Reset = (props) => {
    return(
        <button onClick={() => props.resetTimer() }>Reset Timer</button>
    );
}

export default Reset;