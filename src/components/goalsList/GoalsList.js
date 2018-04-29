import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { saveGoals} from '../../actions/Actions';
const TITLE_TEXT = 'Type a Goal title here';
const DESCRIPTION_TEXT = 'Type Goal Description here';


class GoalsList extends React.Component {
    constructor(props) {
        super(props);
        this.deleteGoal = this.deleteGoal.bind(this);
        this.saveGoal = this.saveGoal.bind(this);
        this.handleGoalChange = this.handleGoalChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.addnewGoal = this.addnewGoal.bind(this);
        this.state = {goalsList:this.props.data}
    }

    deleteGoal(indexTodelete) {
        const list = this.state.goalsList;
        list.splice(indexTodelete,1);
        this.setState({goalsList:list});
    }

 saveGoal(){
    this.props.saveGoals({data: this.state.goalsList});
 }

 handleGoalChange (value ,index){
         let newGoal = value.state.goalsList;
          newGoal[index].title = this[`goalInput${index}`].value ;
          this.setState({goalsList: newGoal});
     }

    handleDescChange(value ,index){
        let newGoal = value.state.goalsList;
        newGoal[index].description = this[`descInput${index}`].value ;
        this.setState({goalsList: newGoal});
    }

    getcomponent = (goal ,index) => {
        return (
            <div key = {"key"+index.toString()}>
                <div>
                    <button className="delete-btn"
                            key = {"b"+index.toString() }
                            onClick={() =>{this.deleteGoal(index)}}>X
                    </button>
                    <textarea className="goals-List"
                            key = {"g"+index.toString() }
                            type="text"
                            ref={(input) => { this[`goalInput${index}`] = input }}
                            onChange={()=>this.handleGoalChange(this,index)}
                            placeholder={goal.title ? goal.title : TITLE_TEXT}/>
                </div>
                <div >
                      <textarea className="desc-List"
                            key = {"d"+index.toString() }
                            type="text" ref={(input) => { this[`descInput${index}`] = input }}
                            onChange={()=>this.handleDescChange(this,index)}
                            placeholder={goal.description ? goal.description : DESCRIPTION_TEXT}/>
                </div>
            </div>
        )
    }
    addnewGoal(){
      const goals = this.state.goalsList;
      goals.push({title:"",description:""});
      this.setState({goalsList:goals});
    }

    getComaponentList =() =>{
        return(
            <div>
                {this.state.goalsList && this.state.goalsList.length>0 && this.state.goalsList.map(
                    function(goal,index){
                    return this.getcomponent(goal,index);
                },this)}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.getComaponentList()}
                <div>
                    <button className="add-new-btn"
                            onClick={this.addnewGoal}>Add New Goals
                    </button>
                    <button className="save-btn"
                            onClick={this.saveGoal}>Save
                    </button>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch,ownProps)=> {
    return bindActionCreators({saveGoals}, dispatch);
}
export default connect(null,mapDispatchToProps)(GoalsList);