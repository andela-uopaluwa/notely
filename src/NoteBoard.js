import React, { Component } from 'react';

class NoteBoard extends Component {
    render() {
        const { note } = this.props;
        console.log("BOARD NOTE", note);
        return (  
            <div className="board">
                <textarea value={note.body || ""} onChange={(e) => this.props.updateNote(e.target.value)} />
            </div>
        )
    }
}

export default NoteBoard;