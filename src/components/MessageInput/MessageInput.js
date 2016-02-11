import React from 'react';
import morseCode from 'services/morseCode/morseCode';

export default class MessageInput extends React.Component {
  constructor (props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const morse = morseCode();
    morse.registerChangeCallback(value => {
      if (value) {
        document.getElementById('morse').style.backgroundColor = "blue"
      } else {
        document.getElementById('morse').style.backgroundColor = "red"
      }
    })
    morse.play(this.refs.messageInput.value);
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='your message' ref='messageInput'/>
        <button type='submit'>Generate</button>
        <div id="morse" style={{width: '100px', height: '100px', backgroundColor: 'red'}}></div>
      </form>
    );
  }
}

export default MessageInput;
