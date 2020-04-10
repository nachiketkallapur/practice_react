import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Counter from './components/count-component';
import EventHandling from './components/event-handling';
import Parent from './components/parent-component';
import Events from './components/events-component';
import LifecycleA from './components/lifecycle-component/lifecycleA';
import RegularComponent from './components/regular-component';
import PureComp from './components/pure-component';
import RefComp from './components/RefComp';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Nachiket"
    }
  }

  render() {
    return (
      <div>
      <Hero name="Batman"/>
      <Hero name="Joker"/>
      </div>
      )
    }
  }
  
  export default App
  
  // return ReactDOM.createPortal(<PortalDemo />, document.getElementById("portal-root")
  // );
  {/* <Counter/>
    <EventHandling/>
    <Events/>
  <LifecycleA/> */}
  // <PortalDemo/>
{/* <RegularComponent name={this.state.name}/>
<PureComp name="Nachiket"/> */}
{/* <RefComp /> */}
{/* <PortalDemo/> */}