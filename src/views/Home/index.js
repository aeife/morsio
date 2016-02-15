import React from 'react';
import { connect } from 'react-redux';

import CSSModules from 'react-css-modules';
import style from './Home.scss';
import MessageInput from 'components/MessageInput/MessageInput';
import MorseCodePlayer from 'components/MorseCodePlayer/MorseCodePlayer';
import MorseCodeSettings from 'components/MorseCodeSettings/MorseCodeSettings';
import { actions as userMorseCodeActions } from 'redux/actions/userMorseCode';
import { pushPath } from 'redux-simple-router';
import Rcslider from 'rc-slider';

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
        <h1 styleName='mainHeading'>Morsio</h1>
        <p styleName='subHeading'>generate and share morse codes</p>
        <hr styleName='devider' />
        <div styleName='containerSlim'>
          <MessageInput setMessage={this.props.setMessage} />
          <MorseCodePlayer message={this.props.userMorseCode.get('message')} settings={this.props.userMorseCode.get('settings')} />
          <button styleName='generateBtn' onClick={this.generate}>Generate</button>
          <MorseCodeSettings settings={this.props.userMorseCode.get('settings')} setSettings={this.props.setSettings} />
        </div>
      </div>
    );
  }
}

function select (state) {
  return {
    userMorseCode: state.userMorseCode
  };
}

export default connect(select, {...userMorseCodeActions, pushPath})(CSSModules(HomeView, style));
