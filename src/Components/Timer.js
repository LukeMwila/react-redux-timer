import React from 'react';
import CurrentTime from './CurrentTime';
import Buttons from './Buttons';

const Timer = (props) => {
    return(
        <div>
            <CurrentTime time={props.time} />
            <Buttons 
                time={props.time}
                startTimer={() => props.startTimer()}
                stopTimer={() => props.stopTimer()}
                resetTimer={() => props.resetTimer()}
            />
        </div>
    );
}

export default Timer;