import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
const TITLE_TEXT = 'Type a Goal title here';
const DESCRIPTION_TEXT = 'Type a Goal title here';
export default class Goal extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <button className="delete-btn" onClick={(val) => this.props.delete(this.props.goal)}>X</button>
                    <input className="goals-List" type="text" refs="goal" placeholder={this.props.goal ? this.props.goal : TITLE_TEXT}/>
                </div>
                <div >
                    <textarea className="desc-List" type="text" refs="des"
                              placeholder={this.props.decs ? this.props.decs : DESCRIPTION_TEXT}/>
                </div>
            </div>
        );
    }
}

