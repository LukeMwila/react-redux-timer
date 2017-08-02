import React from 'react';

const Stop = (props) => {
    return(
        <button onClick={() => props.stopTimer() } >Stop Timer</button>
    );
}

export default Stop;