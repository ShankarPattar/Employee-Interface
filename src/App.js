import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import GoalsList from './components/goalsList/GoalsList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchGoals } from '../src/goalActions/goalActions';

class App extends Component {

    componentWillMount() {
        this.props.fetchGoals();
    }
  render() {
    return (
     <div className="App-layout">
         <Header/>
         <GoalsList/>
     </div>
    );
  }

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchGoals}, dispatch);
}

function mapStateToProps(state) {
    return {
        goalsList: state.state.data,
        message: state.state.message

    }
}
export default connect(null, mapDispatchToProps)(App);

