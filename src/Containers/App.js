import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer, resetTimer } from '../Actions/timerActions';
import Timer from '../Components/Timer';

const App = (props) => {
    return (
      <div>
        <Timer 
          time={props.time} 
          startTimer={() => props.startTimer(props.time.hours, props.time.minutes, props.time.seconds) }
          stopTimer={() => props.stopTimer() }
          resetTimer={() => props.resetTimer() } 
        />
      </div>
    );
}

const mapStateToProps = (state) => {
  return{
    time: state.timerReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    startTimer: (hours, minutes, seconds) => {
      dispatch(startTimer(hours, minutes, seconds));
    },
    stopTimer: () => {
      dispatch(stopTimer());
    },
    resetTimer: () => {
      dispatch(resetTimer());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
