import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Multiselect from './Multiselect';

 const demo=[
  'Australia','Bermuda','Canada','Cameroon','Denmark','France','Finland','Germany'
 ]


function App() {
  const [checkbox,setCheckbox]=useState(false);

  const setTrue = ()=>{setCheckbox(true)}
  const setFalse = ()=>{setCheckbox(false)}
  return (
    <div className="App">
       Checkboxes (Enable/Disabl)
      <select>

      <option onClick={setFalse}>enabled</option>
        <option onClick={setTrue}>disabled</option>
        
      </select>
    <Multiselect value={demo} readonly={checkbox}/>
    </div>
  );
}

export default App;
