import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import List from "./List.js"
import './List.css'

function App() {
  const [currentItem, setcurrentItem] = useState(null);
  const [list , setList] =useState([]);

  const onChangeHandler=(e)=>{
    setcurrentItem(e.target.value);
    console.log(setcurrentItem)
  };

  const clickHandler=()=>{
    setList([...list,{item: currentItem, key: Date.now()}]);
    setcurrentItem(" ");
    console.log(list);
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>My Todo-App</h1>
       <div className="outer-div">
         <div className="inner-div">
           <input value={currentItem} onChange={onChangeHandler}></input>
           <button onClick={clickHandler}>+</button>
         </div>
         <List list={list} setList={setList}/>
       </div>
      </header>
    </div>
  );
}

export default App;
