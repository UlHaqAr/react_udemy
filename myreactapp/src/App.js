import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi i am react app</h1>
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
