import request from 'superagent';
import {toObject} from '../utils/Helper';

const dataService = store => next => action => {
    /* Pass all actions through by default */
    next(action)
    switch (action.type) {
        case 'FETCH_GOALS':
                 request
                .get('http://localhost:3000/data')
                .end((err, res) => {
                    if (err) { /*in case there is any error, dispatch an action containing the error */
                        return next({
                            type: 'FETCH_GOAL_ERROR',
                            err
                        })}
                     /* dispatch action to update the store*/
                    next({
                        type: 'FETCH_GOAL_SUCCESS',
                        data : res.body
                    })
                })
            break;
        case 'SAVE_GOALS':
            //const data = JSON.stringify(action.data);
            return request
                .post('http://localhost:3000/data').set('content-type', 'application/json').accept('application/json').send(action.data)
                .end((err, res) => {
                    if (err) {
                        return next({
                            type: 'SAVE_GOALS_ERROR',
                            err
                        }) }
                    next({
                        /* dispatch action to update the store*/
                        type: 'SAVE_GOALS_SUCCSEE',
                        data : res.body
                    });
                });
            break;
           default:
            break
    }
};
export default dataService