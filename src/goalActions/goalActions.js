export const deleteGoal =(payload) =>{
    return {
        type:'DELETE_GOAL',
        payload:payload
    } ;
}

export const saveGoals =(goals ) =>{
    return {
        type:'SAVE_GOALS_DATA',
        data: goals.data
    } ;
};
export const fetchGoals =( ) =>{
    return {
        type:'FETCH_GOAL_DATA'
    } ;
};

export const addGoals =(goals) =>{
    return {
        type:'ADD_GOAL_DATA',
        goals
    } ;
};
