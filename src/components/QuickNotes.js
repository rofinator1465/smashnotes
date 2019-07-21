import React from "react";
import { Tags } from "./Tags";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export function QuickNotes({handleModalClose}) {
  const [quickNoteValue, setQuickNoteValue] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  const [currentTags, setCurrentTags] = React.useState([]);

  const setTextValue = (event) => {
    setQuickNoteValue(event.target.value);
  }

  const toggleDisabled = () => {
    if (quickNoteValue.trim().length !== 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  const handleTextChange = (event) => {
    setTextValue(event);
    toggleDisabled();
  }

  const preventDefault = (event) => {
    event.preventDefault();
  }

  const clearNote = () => {
    setQuickNoteValue("");
    setCurrentTags([]);
    setDisabled(true);
  }

  const onSave = (event) => {
    // onSave Ready for output to database
    event.preventDefault();

    console.log(
      "QuickNote Value " +
        quickNoteValue +
        "Tags Value " +
        currentTags
    );
    clearNote();
  }

  return (
    <div>
      <form onSubmit={preventDefault}>
        <div>
          <TextField
            id="note-text-area"
            label="Add QuickNote"
            variant="outlined"
            multiline
            rows="5"
            value={quickNoteValue}
            onChange={handleTextChange}
          />

          <Tags currentTags={currentTags} setCurrentTags={setCurrentTags} />

          <Button
            variant="outlined"
            onClick={clearNote}
            value="Reset Note"
          >
            Reset Note
          </Button>

          <Button
            variant="outlined"
            onClick={event => {
              onSave(event);
              handleModalClose();
            }}
            value="Save/Close"
            disabled={disabled}
          >
            Save/Close
          </Button>

          <Button
            variant="outlined"
            onClick={handleModalClose}
            value="Close"
          >
            Close
          </Button>
        </div>
      </form>
    </div>
  );
}
