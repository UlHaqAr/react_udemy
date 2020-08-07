import React from 'react';

//creating a functional component person with basic ES6 syntax
//and returning JSX
const person = () => {
    //to execute a logic in JSX, put it in single curly
    return <p>i m a person. i am {Math.floor(Math.random()*20)} old</p>;
};

export default person;