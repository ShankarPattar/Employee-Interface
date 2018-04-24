
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';


class GoalForm extends React.Component {

render(){

    return (
        <div>
            <div>
                <button className="delete-btn">X</button>
                <input className="goals-List" type="text" refs="goal" placeholder="goal"/>
            </div>
            <div >
                    <textarea className="desc-List" type="text" refs="des" placeholder="desc"/>
            </div>
        </div>
    )

}
}