const timerReducer = (state = {
    time: '00:00:00',
    hours: 0,
    minutes: 0,
    seconds: 0
}, action) => {
    switch(action.type){
        case "START_TIMER":
            state = {
                time: action.payload.time,
                hours: action.payload.hours,
                minutes: action.payload.minutes,
                seconds: action.payload.seconds,
            }
            break;
        case "STOP_TIMER":
            state = {
                ...state
            }
            break;
        case "RESET_TIMER":
            state = {
                time: '00:00:00',
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
            break;
    }
    return state;
};

export default timerReducer;