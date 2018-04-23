/*
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import { addGoal ,saveGoals, fetchGoals} from '../../goalActions/goalActions';

class Goals extends React.Component {
    constructor(props){
        super(props);
        this.createGoals = this.createGoals.bind(this);
        this.state={goals:[],showAdd:false};
      }

      createGoals(){
          /!*state.data.push( {
              title: 'title',
              description: 'deszfs'
          })*!/
        let _satte = this.state.goals;
          _satte.push({title:'titel',description:'desc'});
         this.setState({showAdd:true});
      }
    render() {
        {console.log("staegoal refs---",this.props.refs)}
        return (
            <div>
            {/!*     <input type="text" ref='goal' placeholder="Type a Goal title here"/>
                  <textarea ref='description' placeholder="Type a Goal description here"/>
                <div>
                    <button onClick={()=>this.props.addGoal(this.refs.goal.value,this.refs.description.value)}>Add Goals</button>
                </div>
                <div>
                    <button onClick={()=>this.props.saveGoals()}>save Goals</button>
                </div>*!/}
            </div>);
    }
};

function mapStateToProps(state){
    console.log(" Goals in Goals ",state)
    return {
        goalsList:state.state.data,
        message:state.state.message
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({addGoal,saveGoals,fetchGoals},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Goals);



*/
