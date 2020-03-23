import React,{useState} from 'react';

import './App.css';
import Counter from './components/count-component';
import EventHandling from './components/event-handling';
import Parent from './components/parent-component';


function App() {
  const [text,setText]=useState('');
  const [showChild,setChild]=useState(true);
  const clickHandlerForToggleEvents=()=>{
    setChild(!showChild);
  }
  const clickHandlerForShowChild=()=>{
    setText(text+"Nachiket");
  }
  
  return (
    <div className="App">
      {/* <Counter/>
      <EventHandling/>0 */}
      <button onClick={clickHandlerForToggleEvents}>Toggle events</button><br/>
      <button onClick={clickHandlerForShowChild}>ShowChild</button>
      <h3>{showChild?text:''}</h3>
      <Parent/>
             
    </div>
  );
}

export default App;
