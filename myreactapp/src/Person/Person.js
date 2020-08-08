import React from 'react';

//creating a functional component person with basic ES6 syntax
//and returning JSX
//props is an object passed to component, by default by react. it has access to all properties of person (html)element
//children is a reserved property under props to access data dynamically from element
const person = (props) => {
    //to execute a logic in JSX, put it in single curly
    // return <p>i m a person. i am {Math.floor(Math.random()*20)} old</p>;
    return (
        //u can also pass reference of method from App component to person component ex personclick
        <div>
            <p>i m {props.name}. i am {props.age} old</p>
            <p onClick={props.personclick}>{props.children}</p>
            <input type="text" onChange={props.personChange} value={props.name} />
            <p>**---***---**</p>
        </div>
    );
};

export default person;