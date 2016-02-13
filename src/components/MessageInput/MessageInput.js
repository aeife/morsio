import React from 'react';
import CSSModules from 'react-css-modules';
import style from './MessageInput.scss';

export default class MessageInput extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    setMessage: React.PropTypes.func.isRequired
  };

  render () {
    return (
      <form styleName='form'>
        <label htmlFor='message'>Enter your message</label>
        <textarea styleName='messageInput' name='message' rows='5' ref='messageInput' placeholder='your message' onChange={() => this.props.setMessage(this.refs.messageInput.value)}></textarea>
      </form>
    );
  }
}

export default CSSModules(MessageInput, style);
