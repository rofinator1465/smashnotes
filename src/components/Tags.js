import React, { Component } from "react";
import "./Tags.css";

export class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTags: this.props.currentTags, //Be sure to set state of currentTags in Parent Element
      tagValue: ""
    };

    this.handleTagType = this.handleTagType.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  addTag(value) {
    let newTags = this.state.currentTags;
    newTags.push(value);
    this.setState({ currentTags: newTags });
  }

  removeTag(index) {
    let newTags = this.state.currentTags;
    newTags.splice(index, 1);
    this.setState({ currentTags: newTags });
  }

  renderTag() {
    let newTags = this.state.currentTags;
    return newTags.map((value, index) => (
      <button className="tag btn btn-raised btn-success p-1 m-1" type="button">
        <div
          className="tag-remove-image"
          onClick={() => this.removeTag(index)}
        />
        <div className="tag-text mx-1">{value}</div>
      </button>
    ));
  }

  handleTagType(event) {
    if (event.key === " ") {
      this.setState({ tagValue: event.target.value });
      this.addTag(this.state.tagValue);
      event.target.value = "";
    } else {
      this.setState({ tagValue: event.target.value });
    }
  }

  render() {
    return (
      <div className="form-group mb-3">
        <label className="bmd-label-static">
          Tags - Add Tag Seperated By A Space -
        </label>
        <input
          type="text"
          className="tagBar form-control"
          onKeyUp={this.handleTagType}
          aria-label="noteTags"
          aria-describedby="text-input"
        />
        <div className="container m-2 p-2 tag-group">{this.renderTag()}</div>
      </div>
    );
  }
}