import React, { Component } from "react";

export class QuickNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      disabled: true
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.setDisabled = this.setDisabled.bind(this);
  }

  setTextValue(event){
    this.setState({ value: event.target.value });
  }

  setDisabled() {
    if(this.state.value.trim().length !== 0){
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleTextChange(event){
    this.setTextValue(event);
    this.setDisabled();
  }
  
  onSave() {
    console.log("An essay was submitted: " + this.state.value);
    this.setState({ value: "", disabled: true});
  }

  render() {
    return (
      <div class="modal-content p-3">
        <form>
          <div className="form-group">
            <label for="note-text-area" class="bmd-label-static">Add Quicknote</label>
            <textarea
              id="note-text-area"
              className="form-control"
              value={this.state.value}
              onChange={this.handleTextChange}
            />

            <div class="form-group mb-3">
                <label for="note-tags" class="bmd-label-static">Tags</label>
              <input type="text" id="note-tags" class="form-control" placeholder="Insert Tags Seperated By A Space" aria-label="tags" aria-describedby="text-input" />
            </div>


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
