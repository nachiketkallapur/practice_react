import React,{useState} from 'react';

import './App.css';
import Counter from './components/count-component';
import EventHandling from './components/event-handling';
import Parent from './components/parent-component';
import Events from './components/events-component';
import LifecycleA from './components/lifecycle-component/lifecycleA';


function App() {
 
  
  return (
    <div className="App">
      {/* <Counter/>
      <EventHandling/>0 */}
      <Events/>
      <LifecycleA/>
    </div>
  );
}

export default App;
