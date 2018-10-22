import React, { Component } from 'react';

class SideBar extends Component {
    updateActiveNoteIndex = index => {
        this.props.updateActiveNoteIndex(index)
    }
    render() {
        const { notes } = this.props;
        return (
            <div className="sidebar">
                {notes.map((note, index) => {
                    return (
                        <div key={index} onClick={() => this.updateActiveNoteIndex(index)}>
                            <span>
                                <b>{note.body ? note.body.slice(0, 12) : "New note"}...</b>
                            </span>
                            <br />
                            <span>{note.body.slice(0, 30)}</span>
                            <br />
                            <span>{note.modified_at.toLocaleDateString()}</span>
                            <hr />
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default SideBar;