import React from "react";
import "./Tags.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export function Tags({currentTags, setCurrentTags}) {
  const [tagValue, setTagValue] = React.useState("");
  const [forceUpdate, setForceUpdate] = React.useState(true);

  const addTag = (value) => {
    let valueLower = value.toLowerCase();
    let tags = currentTags;
    if (!tags.includes(valueLower)) {
      tags.push(valueLower);
      setCurrentTags(tags);
      setForceUpdate(!forceUpdate);
    }
  }

  const removeTag = (index) => {
    let tags = currentTags;
    tags.splice(index, 1);
    setCurrentTags(tags);
    setForceUpdate(!forceUpdate);
  }

  const renderTag = () => {
    let newTags = currentTags;
    return newTags.map((value, index) => (
      <Button variant="contained" color="secondary" className="tag">
        <i onClick={() => removeTag(index)} className="material-icons">
          cancel
        </i>
        <div className="tag-text mx-1">{value}</div>
      </Button>
    ));
  }

  const handleTagType = (event) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      addTag(tagValue);
      event.target.value = "";
    } else {
      setTagValue(event.target.value);
    }
  }

  return (
    <div className="form-group mb-3">
      <TextField
        type="text"
        variant="outlined"
        label="Add Tag"
        className="tagBar form-control"
        onKeyUp={handleTagType}
        aria-label="noteTags"
        aria-describedby="text-input"
      />
      <Container className="tag-group">{renderTag()}</Container>
    </div>
  );
}
