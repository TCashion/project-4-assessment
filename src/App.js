import React, { Component } from 'react';
import Circles from './components/Circles/Circles';
import CircleSelector from './components/CircleSelector/CircleSelector';
import './App.css';

class App extends Component {
  state = {
    toggledIndex: 0
  }

  handleClick = (e) => {
    console.log(e.target.id)
    this.setState({
      toggledIndex: parseInt(e.target.id)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            handleClick={this.handleClick}
            toggledIndex={this.state.toggledIndex}
          />
          <Circles 
            toggledIndex={this.state.toggledIndex}
          />
        </main>
      </div>
    );
  }
}

export default App;