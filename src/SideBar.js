import React, { Component } from 'react';

class SideBar extends Component {
    updateActiveNoteIndex = index => {
        this.props.updateActiveNoteIndex(index)
    }
    render() {
        const { notes } = this.props;
        const hasNotes = notes.length > 0;
        return (
            <div className="sidebar">
                {   hasNotes &&
                    notes.map((note, index) => {
                        return (
                            <div key={index} onClick={() => this.props.updateActiveNoteIndex(index)} className={index === this.props.activeNoteIndex ? "sidenote active" : "sidenote"} >
                                <span>
                                    <b>{note.body ? note.body.slice(0, 12) : "New note"}...</b>
                                </span>
                                <br />
                                <span className="note-metadata">{note.body.slice(0, 30)}</span>
                                <br />
                                <span className="note-metadata">{note.modified_at.toLocaleDateString()}</span>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default SideBar;