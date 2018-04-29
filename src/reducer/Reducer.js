import {combineReducers} from 'redux';
const goalReducer = (state=[],action)=> {
    switch (action.type){
        case 'SAVE_GOALS_SUCCSEE' :
            state = {"data":action.data};
            return state;
            break;
        case 'SAVE_GOALS_ERROR' :
            state = {"data":action.data};
            break;
        case 'FETCH_GOAL_SUCCESS':
            state = {"data":action.data};
            return state;
            break;
        case 'FETCH_GOAL_ERROR':
            //state = {"data":action.data};
            return state;
            break;
        default : break;
    }
    return state;
},
 reducers = combineReducers({state: goalReducer });
export default reducers;
