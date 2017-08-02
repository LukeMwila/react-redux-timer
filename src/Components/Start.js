import React from 'react';

const Start = (props) => {
    return(
        <button onClick={() => props.startTimer() }>Start Timer</button>
    );
}

export default Start;