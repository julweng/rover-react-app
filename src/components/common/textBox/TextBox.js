import React, { Component } from 'react';
import './TextBox.css';

class TextBox extends Component {
  state = {
    summary: `Dogs and cats make me smile and feel warm inside. 
              I have had several dogs and cats come into my life since I was a child.
              They have given me wonderful memories and unconditional love. 
              I look forward to enriching that experience for the dog owners, 
              the dogs and the sitters by using the skills that I have learned.`,
  }
  render() {
    return (
      <div className="row">
      <div className="col-12">
        <p>{this.state.summary}</p>
        </div>
      </div>
    );
  }
}

export default TextBox;
