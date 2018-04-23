import React from 'react';
import {connect} from 'react-redux';
import Goal from '../goal/Goal';
import {bindActionCreators} from 'redux';
import {fetchGoals, deleteGoal, saveGoals} from '../../goalActions/goalActions';

class GoalsList extends React.Component {
    constructor(props) {
        super(props);
        this.getGoal = this.getGoal.bind(this);
        this.deleteGoal = this.deleteGoal.bind(this);
        this.state = {goalsList: props.goalsList};
    }

    componentWillMount() {
        this.props.fetchGoals();
    }

    getGoal() {
        const goals = this.props.goalsList;
        goals.push({title: "", description: ""});
        this.setState({goalsList: goals})
    }

    deleteGoal(titleTodelete) {
        const goals = this.props.goalsList;
        const deltedlist = goals.filter((item) => item.title !== titleTodelete);
        this.props.deleteGoal({data: deltedlist});
    }

    render() {
        return (
            <div>
              <div>
                {this.props.goalsList && this.props.goalsList.map((goal, index) =>
                    <Goal key={Math.random()} delete={this.deleteGoal} goal={goal.title} decs={goal.description}/>)}
                {this.props.message}
                </div>
                <div>
                    <button className="add-new-btn" onClick={this.getGoal}>Add New Goals</button>

                    <button className="save-btn" onClick={(data) => {
                        this.props.saveGoals({data: this.state.goalsList});
                    }}>Save
                    </button>
                </div>

            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchGoals, deleteGoal, saveGoals}, dispatch);
}
function mapStateToProps(state) {
    return {
        goalsList: state.state.data,
        message: state.state.message

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GoalsList);