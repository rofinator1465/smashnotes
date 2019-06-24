import React, { Component } from "react";
import "./Tags.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagValue: ""
    };

    this.handleTagType = this.handleTagType.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  addTag(value) {
    let tags = this.props.currentTags;
    if (!tags.includes(value)) {
      tags.push(value);
      this.setState({ currentTags: tags });
    }
  }

  removeTag(index) {
    let tags = this.props.currentTags;
    tags.splice(index, 1);
    this.setState({ currentTags: tags });
  }

  renderTag() {
    let newTags = this.props.currentTags;
    return newTags.map((value, index) => (
      <Button color="warning" className="tag">
        <i onClick={() => this.removeTag(index)} className="material-icons">
          cancel
        </i>
        <div className="tag-text mx-1">{value}</div>
      </Button>
    ));
  }

  handleTagType(event) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
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
        <TextField
          type="text"
          variant="outlined"
          label="Add Tag"
          className="tagBar form-control"
          onKeyUp={this.handleTagType}
          aria-label="noteTags"
          aria-describedby="text-input"
        />
        <Container className="tag-group">{this.renderTag()}</Container>
      </div>
    );
  }
}
