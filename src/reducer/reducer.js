import {combineReducers} from 'redux';
import { saveGoals ,deletGoals ,fetchGoals} from './../api/apiClient';
const goalReducer = (state=[],action)=> {
    switch (action.type){
        case 'SAVE_GOALS' :
           // saveGoals()-- call this api to save goals
            state = {
                "status": "success",
                "data": null,
                "message": "Created saved Successfully!"
            };

            return state;
            break;
        case 'DELETE_GOAL':
            //deletGoals() --call this api to delete service
            state =  action.payload;
            state.message="Deleted Goal";
            return state
            break;
        case 'FETCH_GOAL':
            ///fetchGoals() -- call this api to fetch service
             state = {
                "status": "success",
                "data": [
                    {
                        "title": "Goal one",
                        "description": "First goal's description"
                    },
                    {
                        "title": "Goal two",
                        "description": "Second goal's description"
                    }
                ],
                "message": null
            };
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
