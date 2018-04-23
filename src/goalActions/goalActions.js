export const deleteGoal =(payload) =>{
    return {
        type:'DELETE_GOAL',
        payload:payload
    } ;
}

export const saveGoals =(payLoad ) =>{
    return {
        type:'SAVE_GOALS',
        payLoad: payLoad
    } ;
};
export const fetchGoals =( ) =>{
    return {
        type:'FETCH_GOAL',
    } ;
};


