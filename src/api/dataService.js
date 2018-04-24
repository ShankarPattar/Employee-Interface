import request from 'superagent';

const dataService = store => next => action => {
    /* Pass all actions through by default */
    next(action)
    switch (action.type) {
        case 'FETCH_GOAL_DATA':
                 request
                .get('http://localhost:3000/data')
                .end((err, res) => {
                    if (err) {
                        /*
                         in case there is any error, dispatch an action containing the error
                         */
                        return next({
                            type: 'FETCH_GOAL_DATA_ERROR',
                            err
                        })
                    }
                   /* dispatch action to update the store*/

                    next({
                        type: 'FETCH_GOAL_DATA_RECEIVED',
                        data : res.body
                    })
                })
            break;
        case 'ADD_GOAL_DATA':
            request
                .post('http://localhost:3000/data',"")
                .end((err, res) => {
                    if (err) {

                        return next({
                            type: 'ADD_GOAL_DATA_ERROR',
                            err
                        })
                    }
                        next({
                        type: 'ADD_GOAL_DATA_RECEIVED',
                        data : res.body
                    })
                })
            break;
        case 'SAVE_GOALS_DATA':
            request
                .post('http://localhost:3000/data').set('Content-Type', 'multipart/form-data').accept('application/json').send(action)
                .end((err, res) => {
                    if (err) {

                        return next({
                            type: 'SAVE_GOAL_DATA_ERROR',
                            err
                        })
                    }
                    next({
                        type: 'SAVE_GOAL_DATA_RECEIVED',
                        data : res.body
                    })
                })
            break;
        default:
            break
    }

};

export default dataService