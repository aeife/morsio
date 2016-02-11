import React from 'react';

export default class MessageInput extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    setMessage: React.PropTypes.func.isRequired
  };

  render () {
    return (
      <div>
        <h2>Enter your message</h2>
        <input type='text' placeholder='your message' ref='messageInput' onChange={() => this.props.setMessage(this.refs.messageInput.value)}/>
      </div>
    );
  }
}

export default MessageInput;
