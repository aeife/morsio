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

  // TODO: update player settings on settings change

  static propTypes = {
    message: React.PropTypes.string.isRequired
  };

  onPlay = (e) => {
    e.preventDefault();
    this.morseCode.play(this.props.message);
  };

  onMorseCodeStateChange = newValue => {
    this.setState({active: !!newValue});
  };

  render () {
    return (
      <div>
        <button onClick={this.onPlay} styleName='btnDefault'>Play</button>
        <div styleName={this.state.active ? 'activeDisplay' : 'display'}></div>
      </div>
    );
  }
}

export default CSSModules(MorseCodePlayer, Object.assign({}, style, buttonStyles));
