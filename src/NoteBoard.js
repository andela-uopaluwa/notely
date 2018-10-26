import React, { Component } from 'react';

class NoteBoard extends Component {
    render() {
        const { note } = this.props;
        return (  
            <div className="board">
                <textarea autoFocus value={note ? note.body : ""} onChange={(e) => this.props.updateNote(e.target.value)} />
            </div>
        )
    }
}

export default NoteBoard;