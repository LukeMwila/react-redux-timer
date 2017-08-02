import React from 'react';
import Start from './Start';
import Stop from './Stop';
import Reset from './Reset';

const Buttons = (props) => {
    return(
        <div>
            <Start time={props.time} startTimer={() => props.startTimer()} />
            <Stop time={props.time} stopTimer={() => props.stopTimer()} />
            <Reset time={props.time} resetTimer={() => props.resetTimer()} />
        </div>
    );
}

export default Buttons;