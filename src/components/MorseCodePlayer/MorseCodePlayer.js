import React from 'react';
import morseCode from 'services/morseCode/morseCode';
import style from './MorseCodePlayer.scss';

export default class MorseCodePlayer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {active: false};

    this.morseCode = morseCode({});
    this.morseCode.registerChangeCallback(this.onMorseCodeStateChange);
  }

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
        <button onClick={this.onPlay}>Play</button>
        <div className={this.state.active ? style.activeDisplay : style.display}></div>
      </div>
    );
  }
}

export default MorseCodePlayer;
