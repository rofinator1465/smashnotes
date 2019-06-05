import React, { Component } from "react";
import { Tags } from "./Tags";

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
    this.setDisabled = this.setDisabled.bind(this);
  }

  setTextValue(event) {
    this.setState({ quickNoteValue: event.target.value });
  }

  setDisabled() {
    if (this.state.quickNoteValue.trim().length !== 0) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleTextChange(event) {
    this.setTextValue(event);
    this.setDisabled();
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
    this.setState({ quickNoteValue: "", currentTags: [], disabled: true });
  }

  render() {
    return (
      <div class="modal-content p-5">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label for="note-text-area" class="bmd-label-static">
              Add Quicknote
            </label>
            <textarea
              id="note-text-area"
              className="form-control"
              rows="5"
              value={this.state.quickNoteValue}
              onChange={this.handleTextChange}
            />

            <Tags currentTags={this.state.currentTags} />

            <input
              type="button"
              className="btn btn-primary"
              onClick={this.onSave}
              data-dismiss="modal"
              value="Save/Close"
              disabled={this.state.disabled}
            />

            <input
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={this.setDisabled}
              value="Close"
            />
          </div>
        </form>
      </div>
    );
  }
}
