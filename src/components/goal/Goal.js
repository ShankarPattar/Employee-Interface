import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
const TITLE_TEXT = 'Type a Goal title here';
const DESCRIPTION_TEXT = 'Type a Goal title here';
export default class Goal extends React.Component {
    render() {
        return (
            <form key={"Form"+this.props.index}>
                <div>
                   {<button className="delete-btn" onClick={(val) => this.props.delete(this.props.index)}>X</button>}
                    <input className="goals-List" type="text" value={this.props.goal.title}  refs={"goal"+this.props.index} placeholder={this.props.goal.title ? this.props.goal.title : TITLE_TEXT}/>
                </div>
                <div >
                    <textarea className="desc-List" type="text" refs={"desc"+this.props.index}
                              placeholder={this.props.goal.description ? this.props.goal.description : DESCRIPTION_TEXT}/>
                </div>
            </form>
        );
    }
}

