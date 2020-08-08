import React, { Component } from 'react';
import './App.css';
import Per from './Person/Person';

//the component needs to be extended for classes
class App extends Component {
  //state is a special property provided in classes which extend 'Component'
  //everytime this state changes, DOM elements are re-rendered
  state = {
    persons: [{ name: "Anish", age: "65" }, { name: "Arsal", age: "46" }, { name: "Mandy", age: "97" }],
    salary: "465131205"
  }

  switchNameHandler = (newname) => {
    console.log('in switch name handler');
    //u shud not mutate state directly like this
    // this.state.persons[0].name = "Prabir";
    //use the setter available, it takes the new state and 'merges' with existing one
    this.setState({ persons: [{ name: newname, age: "1" }, { name: "Arsalx", age: "2" }, { name: newname, age: "3" }] });
  }

  //this event is coming from person component
  nameChangeHandler = (event) => {
    this.setState({ persons: [{ name: 'Anish', age: "1" }, { name: "Arsalx", age: "2" }, { name: event.target.value, age: "3" }] });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi i am react app</h1>
        <button onClick={() => this.switchNameHandler('Anish')}>Switch Name</button>
        <Per name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Per name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Per name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          personclick={this.switchNameHandler.bind(this, 'Mandy2')}
          personChange={this.nameChangeHandler}>This data will be passed as props->children. Click me.</Per>
      </div>
      //first argument is the html element u want to return
      //second argument(optional) is the configuration you want
      //third argument is the children nested inside the div 
      //the compiles the JSX code above in render method to this line below.
      // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi i am react app.'));

    );
  }
}

export default App;
