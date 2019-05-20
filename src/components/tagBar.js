import React, { Component } from 'react';

export class tagBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

  render() {
    let quickTags = this.props.currentQuickTags;
    return quickTags.map((value, index) => (
      <button className="btn btn-raised btn-success tag p-1 m-1" type="button">
        <div
          className="tag-remove-image"
          onClick={this.removeTag({ index })}
        />
        <div className="tag-text mx-1">
          {value}
          {index}
        </div>
      </button>
    ));
  }

}