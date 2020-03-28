import React, { Component } from 'react';
import './App.css';
import Headerr from './Header/Header';
import Headerr1 from './trc/receivedtrans';
import Headerr2 from './spenttrans/spenttrans';


class App extends Component {
  render() {
    return (
    <div className="App">
      <Headerr />
      <p>    </p>
      <Headerr1 />
      <Headerr2 />
     
    </div>
    );
  }
}

export default App;
