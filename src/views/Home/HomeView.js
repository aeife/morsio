import React from 'react';
import MessageInput from 'components/MessageInput/MessageInput';

export default class HomeView extends React.Component {
  render () {
    return (
      <div>
        <h1>Home View</h1>
        <MessageInput />
      </div>
    );
  }
}
