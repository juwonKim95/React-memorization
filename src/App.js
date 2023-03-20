//import { useState } from 'react';
import './App.css';
import Calculater from './components/Calculater';
//import ShowState from './components/ShowState';

function App() {
  // const [number,setNumber] = useState(0);
  // const [text,setText] = useState("");
  // const increaseNumber = () =>{
  //   setNumber(number+1);
  // }
  // const decreaseNumber = () =>{
  //   setNumber(number-1);
  // }
  // const onChange = (e)=>{
  //   setText(e.target.value);
  // }
  return (
    <div className="App">
      {/* <div>
        <button onClick={increaseNumber}>+1</button>
        <button onClick={decreaseNumber}>-1</button>
        <input
        type="text" placeholder="lastname"
        onChange={onChange}
        />
      </div>
      <ShowState number={number} text={text}/>
  */}
    <Calculater />
    </div> 
  );
}

export default App;
