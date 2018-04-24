import React from 'react';
import {connect} from 'react-redux';
import Goal from '../goal/Goal';
import {bindActionCreators} from 'redux';
import {fetchGoals, deleteGoal, saveGoals ,addGoals } from '../../goalActions/goalActions';
const TITLE_TEXT = 'Type a Goal title here';
const DESCRIPTION_TEXT = 'Type a Goal title here';
class GoalsList extends React.Component {
    constructor(props) {
        super(props);
        this.deleteGoal = this.deleteGoal.bind(this);
        this.saveGoal = this.saveGoal.bind(this);
        this.readrefs = this.readrefs.bind(this);
        this.getForms = this.getForms.bind(this);
        this.getFormList = this.getFormList.bind(this);
        this.state = {goalsList:this.props.goalsList};

    }


    deleteGoal(titleTodelete) {
        const goals = this.state.goalsList.splice(titleTodelete,1);
       // const filteredList = this.state.goalsList.filter((item,index) => index == titleTodelete);
        //this.props.deleteGoal({data: deltedlist});
        this.setState({goalsList:goals});
    }
 saveGoal(){
    this.props.saveGoals({data: this.props.goalsList});
 }
    readrefs(value ,index){
     console.log("readrefsreadrefs"+this.refs) ;
    }

    getForms(goal, index){
        return (<Goal goal={goal} index={index} delete ={this.deleteGoal}/>);
    }


    getFormList(){
        let forms =[];
        if (this.props.goalsList && this.props.goalsList.length>0 ){
            this.props.goalsList.map(function(goal,index){
                forms.push(this.getForms(goal,index));

            },this)};
      //this.setState({goalForms:forms});
        return forms;
}

    render() {

        return (
            <div>
              <div>{console.log("gooalsss--",this.state.goalsList)}
              { console.log("props goola--",this.props.goalsList)}
              {

                  this.state.goalsList&& this.state.goalsList.map(function(goal,index){
                  this.getForms(goal,index);

              },this)}


                {this.props.message}
                </div>
                <div>
                    <button className="add-new-btn" onClick={this.getGoal}>Add New Goals</button>

                    <button className="save-btn" onClick={this.saveGoal}>Save
                    </button>
                </div>

            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchGoals, deleteGoal, saveGoals, addGoals}, dispatch);
}
function mapStateToProps(state) {
    console.log("gollist mapStateToProps",state)
    return {
        goalsList: state.state.data,
        message: state.state.message

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GoalsList);