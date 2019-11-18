import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">React Todo Application</div>
      <div className="btn">+</div>
      <input type="text" ref={((input) => { this.textInput = input })} />

    </div>
  );
}

export default App;
