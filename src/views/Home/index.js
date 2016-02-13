import React from 'react';
import { connect } from 'react-redux';

import MessageInput from 'components/MessageInput/MessageInput';
import MorseCodePlayer from 'components/MorseCodePlayer/MorseCodePlayer';
import MorseCodeSettings from 'components/MorseCodeSettings/MorseCodeSettings';
import { actions as userMorseCodeActions } from 'redux/actions/userMorseCode';
import { pushPath } from 'redux-simple-router';

class HomeView extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    setMessage: React.PropTypes.func,
    setSettings: React.PropTypes.func,
    userMorseCode: React.PropTypes.object,
    requestUrlId: React.PropTypes.func,
    pushPath: React.PropTypes.func
  };

  generate = (e) => {
    e.preventDefault();
    this.props.requestUrlId(this.props.userMorseCode.get('message'), this.props.userMorseCode.get('settings')).then(() => {
      console.log('push');
      this.props.pushPath('generated');
    });
  };

  render () {
    return (
      <div>
        <h1>Home View</h1>
        <MessageInput setMessage={this.props.setMessage} />
        <MorseCodePlayer message={this.props.userMorseCode.get('message')} settings={this.props.userMorseCode.get('settings')} />
        <MorseCodeSettings settings={this.props.userMorseCode.get('settings')} setSettings={this.props.setSettings} />
        <button onClick={this.generate}>Generate</button>
      </div>
    );
  }
}

function select (state) {
  return {
    userMorseCode: state.userMorseCode
  };
}

export default connect(select, {...userMorseCodeActions, pushPath})(HomeView);