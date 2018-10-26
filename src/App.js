import React, { Component } from 'react';
import './App.css';
import SideBar from './SideBar';
import NoteBoard from './NoteBoard';
import MenuBar from './MenuBar';

class App extends Component {
  state = {
    notes: [],
    activeNoteIndex: 0
  };
  updateActiveNoteIndex = index => {
    this.setState({
      activeNoteIndex: index
    })
  }
  updateNote = note_content => {
    const { notes, activeNoteIndex } = this.state;
    notes[activeNoteIndex] = { body: note_content, modified_at: new Date() };
    this.setState({
      notes: notes
    });
  };
  addNewNote = () => {
    const note = { body: "", modified_at: new Date() };
    this.setState({
      notes: [note].concat(this.state.notes),
      activeNoteIndex: 0
    });
  };
  deleteNote = index => {
    const { notes, activeNoteIndex } = this.state;
    if (notes.length) {
      notes.splice(activeNoteIndex, 1);
      this.setState({
        notes: notes,
        activeNoteIndex: activeNoteIndex ? activeNoteIndex - 1 : 0
      });
    }
  };
  render() {
    const activeNote = this.state.notes[this.state.activeNoteIndex];
    return (
      <div className="App">
        <MenuBar addNewNote={this.addNewNote} deleteNote={this.deleteNote} />
        <div className="main">
          <SideBar notes={this.state.notes} updateActiveNoteIndex={this.updateActiveNoteIndex} activeNoteIndex={this.state.activeNoteIndex} />
          <NoteBoard note={activeNote} updateNote={this.updateNote} />
        </div>
      </div>
    );
  }
}

export default App;
