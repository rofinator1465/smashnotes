import React, { Component } from "react";
import { Tags } from "./Tags";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export class QuickNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickNoteValue: "",
      disabled: true,
      currentTags: []
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.preventDefault = this.preventDefault.bind(this);
    this.toggleDisabled = this.toggleDisabled.bind(this);
    this.clearNote = this.clearNote.bind(this);
  }

  setTextValue(event) {
    this.setState({ quickNoteValue: event.target.value });
  }

  toggleDisabled() {
    if (this.state.quickNoteValue.trim().length !== 0) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleTextChange(event) {
    this.setTextValue(event);
    this.toggleDisabled();
  }

  preventDefault(event) {
    event.preventDefault();
  }

  clearNote() {
    this.setState({ quickNoteValue: "", currentTags: [], disabled: true });
  }

  onSave(event) {
    // onSave Ready for output to database
    event.preventDefault();

    console.log(
      "QuickNote Value " +
        this.state.quickNoteValue +
        "Tags Value " +
        this.state.currentTags
    );
    this.clearNote();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.preventDefault}>
          <div>
            <TextField
              id="note-text-area"
              label="Add QuickNote"
              variant="outlined"
              multiline
              rows="5"
              value={this.state.quickNoteValue}
              onChange={this.handleTextChange}
            />

            <Tags currentTags={this.state.currentTags} />

            <Button
              variant="outlined"
              onClick={this.clearNote}
              value="Reset Note"
            >
              Reset Note
            </Button>

            <Button
              variant="outlined"
              onClick={event => {
                this.onSave(event);
                this.props.handleModalClose();
              }}
              value="Save/Close"
              disabled={this.state.disabled}
            >
              Save/Close
            </Button>

            <Button
              variant="outlined"
              onClick={this.props.handleModalClose}
              value="Close"
            >
              Close
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
