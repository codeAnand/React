import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

export default class App extends Component  {
  render() {
  return (
    <div className="App">
    <Counter />
      {/* <Message /> */}
          {/* Functions */}
          {/* <Greet name = "Bruce" heroname = "BatMan">
            <p>This is children props </p>
          </Greet>
          <Greet name = "Clark" heroname = "SuperMan"/>
          <Greet name = "Steve" heroname = "Captain America"/> */}
          {/* classes */}
          {/* <Welcome name = "Bruce" heroname = "BatMan"/>
          <Welcome name = "Clark" heroname = "SuperMan"/>
          <Welcome name = "Steve" heroname = "Captain America"/> */}
          {/* <Hello /> */}
    </div>
  );
  }
}


