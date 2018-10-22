import React, { Component } from 'react';
import notes from './notes';
import './App.css';
import SideBar from './SideBar';
import NoteBoard from './NoteBoard';

class App extends Component {
  state = {
    notes: notes,
    activeNoteIndex: 0
  };
  updateActiveNoteIndex = index => {
    this.setState({
      activeNoteIndex: index
    })
  }
  render() {
    const activeNote = this.state.notes[this.state.activeNoteIndex];
    return (
      <div className="App">
        <div className="main">
          <SideBar notes={this.state.notes} updateActiveNoteIndex={this.updateActiveNoteIndex} />
          <NoteBoard note={activeNote} />
        </div>
      </div>
    );
  }
}

export default App;
