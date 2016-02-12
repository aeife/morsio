import React from 'react';
import { connect } from 'react-redux';

import MessageInput from 'components/MessageInput/MessageInput';
import MorseCodePlayer from 'components/MorseCodePlayer/MorseCodePlayer';
import MorseCodeSettings from 'components/MorseCodeSettings/MorseCodeSettings';
import GeneratedData from 'components/GeneratedData/GeneratedData';
import { actions as userMorseCodeActions } from 'redux/actions/userMorseCode';

export default class HomeView extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    setMessage: React.PropTypes.func,
    setSettings: React.PropTypes.func,
    userMorseCode: React.PropTypes.object
  };

  render () {
    return (
      <div>
        <h1>Home View</h1>
        <MessageInput setMessage={this.props.setMessage} />
        <MorseCodePlayer message={this.props.userMorseCode.get('message')} settings={this.props.userMorseCode.get('settings')} />
        <MorseCodeSettings settings={this.props.userMorseCode.get('settings')} setSettings={this.props.setSettings} />
        <GeneratedData />
      </div>
    );
  }
}

function select (state) {
  return {
    userMorseCode: state.userMorseCode
  };
}

export default connect(select, {...userMorseCodeActions})(HomeView);
