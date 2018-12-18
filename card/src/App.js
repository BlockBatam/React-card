import React, { Component } from 'react';

import './card.css';
import Content from './Components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvn21Pou1UyWaBKscb-r9impTtEov7rdlGWi-cgJLVvbu_mEmEYA" 
        className="picture" alt="Mountain" />
        <Content/>
        <button name="Read"onclick={() => this.klik()}> Read </button> 
        <button name="Share" onclick={() => this.klik()}> Share </button>
      </div>
    );
  }
}

export default App;
