import React, { Component } from 'react';
import './css/App.css';
import Header from './components/header/Header';
import GoalsList from './components/goalsList/GoalsList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchGoals } from './actions/Actions';


const mapDispatchToProps = (dispatch,ownProps)=> {
    return bindActionCreators({fetchGoals}, dispatch);
}

const mapStateToProps = (state,ownProps) => {
    return {
        data: state.state.data
    }
}

class App extends Component {

    constructor(props){
        super(props);
        this.getGoalList = this.getGoalList.bind(this);
    }

    componentWillMount(){
        this.props.fetchGoals();
    }
    getGoalList(){
        return <GoalsList data = {this.props.data} />
    }

  render() {
    return (
     <div className="App-layout">
         <Header/>
      { this.props.data && this.getGoalList()}
     </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);


