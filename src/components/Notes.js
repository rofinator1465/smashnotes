import React, { Component } from "react";
import $ from "jquery";

export class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div class="modal-content p-3">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Add Quicknote</label>
            <textarea
              className="form-control"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              className="btn btn-primary"
              type="submit"
              value="Save/Close"
            />

            <input
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              value="Close"
            />
          </div>
        </form>
      </div>
    );
  }
}
