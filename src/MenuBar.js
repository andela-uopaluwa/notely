import React, { Component } from 'react';
import { FaTrashAlt, FaFile } from "react-icons/fa";

class MenuBar extends Component {
    render() {
        return (
            <div className="menubar">
                <button className="action-button" onClick={this.props.addNewNote}><FaFile className="controls" /></button>
                <button className="action-button" onClick={this.props.deleteNote}><FaTrashAlt className="controls" /></button>
            </div>
        )
    }
}

export default MenuBar;