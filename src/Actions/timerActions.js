let t = null;
export const startTimer = (hours, minutes, seconds) => {
    return dispatch => {
        t = setInterval(() => {
            let time;
            
            if(seconds == 59){
                seconds = 0;
                minutes = Math.floor(minutes) + 1;
            }else{
                seconds = seconds + 1;
            }

            if(minutes == 59){
                minutes = 0;
                hours = Math.floor(hours) + 1;
            }
            
            time = addLeadingZero(hours) + ':' + addLeadingZero(minutes) + ':' + addLeadingZero(seconds);

            dispatch({
                type: "START_TIMER",
                payload: {
                    time: time,
                    hours: hours, 
                    minutes: minutes, 
                    seconds: seconds,  
                }
            });
        }, 1000)
    };
}

function addLeadingZero(time){

    if (time <= 9) {
      return "0" + Math.floor(time);
    } else {
      return time;
    }

}

export const stopTimer = () => {
    clearInterval(t);
    return{
        type: "STOP_TIMER"
    }
}

export const resetTimer = () => {
    clearInterval(t);
    return {
        type: "RESET_TIMER"
    };
}