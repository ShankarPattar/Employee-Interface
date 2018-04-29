
export const saveGoals =(goals)=>{
    return {
        type:'SAVE_GOALS',
        data: goals.data
    } ;
};
export const fetchGoals =()=>{
    return {
        type:'FETCH_GOALS'
    } ;
};
