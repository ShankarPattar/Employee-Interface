import {combineReducers} from 'redux';
import { saveGoals ,deletGoals ,fetchGoals} from './../api/apiClient';
const goalReducer = (state=[],action)=> {
    switch (action.type){
        case 'SAVE_GOAL_DATA_RECEIVED' :
            state = {"data":action.data};
            break;
        case 'DELETE_GOAL':
            //deletGoals() --call this api to delete service
            state =  action.payload;
            state.message="Deleted Goal";
            return state
            break;
        case 'FETCH_GOAL_DATA_RECEIVED':
            state = {"data":action.data};
            return state;
            break;
        case 'ADD_GOAL_DATA_RECEIVED':
            state = {"data":action.data};
            return state;
            break;

    }
    return state;
},
 reducers = combineReducers(
        {
           state: goalReducer

        }

    );
export default reducers;
