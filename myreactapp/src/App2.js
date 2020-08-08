import React, { useState } from 'react';
import './App.css';
import Per from './Person/Person';

//converting class based component to function based component
const App2 = props =>  {
    //the useState method returns two values - the current state and the handler to set its value
  const [personState, setPersonState] = useState({
    persons: [{name:"Anish", age:"65"},{name:"Arsal", age:"46"},{name:"Mandy", age:"97"}],
    salary:"465131205"
  });

  const [secondState, setSecondState] = useState('second state');

  console.log(personState, secondState);
  
  const switchNameHandler = ()=>{
      //the setter for personState replaces and not merges the old state with new state
      //this will not touch the second state though
    setPersonState({persons: [{name:"Anish", age:"1"},{name:"Arsalx", age:"2"},{name:"Mandy", age:"3"}]});
  }

    return (
      <div className="App">
        <h1>Hi i am react app</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Per name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Per name={personState.persons[1].name} age={personState.persons[1].age}/>
        <Per name={personState.persons[2].name} age={personState.persons[2].age}>This data will be passed as props->children</Per>
      </div>
    );
}

export default App2;
