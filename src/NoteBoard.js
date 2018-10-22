import React, { Component } from 'react';

class NoteBoard extends Component {
    render() {
        const { note } = this.props;
        console.log("BOARD NOTE", note);
        return (  
            <div className="board">
                <textarea value={note.body || ""} onChange={this.updateNoteBody} />
            </div>
        )
    }
}

export default NoteBoard;