import logo from './logo.svg';
import './App.css';
import CheckableDropdown from './CheckableDropdown';
import React, { useState, useRef } from 'react'

function App() {

  const checkableDropdown1 = useRef();

  const item1 = {label: "food", isSelected: false};
  const item2 = {label: "cocacola", isSelected: true};
  const item3 = {label: "hats", isSelected: true};
  const item4 = {label: "people", isSelected: false};
  const item5 = {label: "chips", isSelected: false};
  const item6 = {label: "beer pong", isSelected: true};
  const item7 = {label: "other preparations", isSelected: true};
  const item8 = {label: "elyse gregory", isSelected: false};

  const itemList = [item1, item2, item3, item4, item5, item6, item7, item8];

  const [dropdown1Open, setDropdown1Open] = useState();

  function setOpen1(value)
  {
    setDropdown1Open(value);
  }

  function unfocusAllCheckableDropdowns(event)
  {
    var node = event.target;
    while(node.parentElement !== null)
    {
      node = node.parentElement;
      if(node.className.includes("checkableDropdownHitbox"))
      {
        return;
      }
    }

    setOpen1(false);
  }

  return (
    <div className="App" onClick={event => { unfocusAllCheckableDropdowns(event)}}>
      <div className="mainContainer">
        <h1>This is the combobox dropdown</h1>
        <p>This widget gives a dropdown list of checkable options</p>
        <div className="narrow">
          <CheckableDropdown useRef={checkableDropdown1} items={itemList} isOpen={dropdown1Open} setOpen={setOpen1}/>
        </div>
      </div>
    </div>
  );
}

export default App;
