import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import GoalsList from './components/goalsList/GoalsList';


class App extends Component {

  render() {
    return (
     <div className="App-layout">
         <Header/>
         <GoalsList/>
     </div>

    );
  }

}
export default App;
