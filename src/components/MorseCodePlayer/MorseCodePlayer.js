import React from 'react';
import morseCode from 'services/morseCode/morseCode';
import CSSModules from 'react-css-modules';
import style from './MorseCodePlayer.scss';
import buttonStyles from 'styles/buttons.scss';

export default class MorseCodePlayer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {active: false};

    this.morseCode = morseCode({});
    this.morseCode.registerChangeCallback(this.onMorseCodeStateChange);
  }

  static propTypes = {
    message: React.PropTypes.string.isRequired,
    settings: React.PropTypes.object
  };

  onPlay = (e) => {
    e.preventDefault();
    this.morseCode.setSettings(this.props.settings.toJS());
    this.morseCode.play(this.props.message);
  };

  onMorseCodeStateChange = newValue => {
    this.setState({active: !!newValue});
  };

  render () {
    return (
      <div>
        <h2>Morse Player</h2>
        <button onClick={this.onPlay} styleName='btnDefault'>Play</button>
        <div styleName={this.state.active ? 'activeDisplay' : 'inactiveDisplay'}></div>
      </div>
    );
  }
}

export default CSSModules(MorseCodePlayer, Object.assign({}, style, buttonStyles));
