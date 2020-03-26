import React,{useState, Component} from 'react';

import './App.css';
import Counter from './components/count-component';
import EventHandling from './components/event-handling';
import Parent from './components/parent-component';
import Events from './components/events-component';
import LifecycleA from './components/lifecycle-component/lifecycleA';
import RegularComponent from './components/regular-component';
import PureComp from './components/pure-component';
import RefComp from './components/RefComp';


 class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        name:"Nachiket"
     }
   }
   

  componentDidMount=()=>{
    setInterval(()=>{
      this.setState({name:"Nachiket"})
    },2000)
  }

  shouldComponentUpdate(nextProps,nextState){
    return true
  }
 
  render(){
  return (
    <div className="App">
      {/* <Counter/>
      <EventHandling/>
      <Events/>
      <LifecycleA/> */}
      {/* <RegularComponent name={this.state.name}/>
      <PureComp name="Nachiket"/> */}
      <RefComp/>
    </div>
  );
    }
}

export default App
