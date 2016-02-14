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

  onPause = (e) => {
    e.preventDefault();
  };

  onStop = (e) => {
    e.preventDefault();
  };

  onMorseCodeStateChange = newValue => {
    this.setState({active: !!newValue});
  };

  render () {
    return (
      <div styleName='playerWrapper'>
        <div styleName='controls'>
          <a href onClick={this.onPlay}><i className='fa fa-play'></i></a>
          <a href onClick={this.onPause}><i className='fa fa-pause'></i></a>
          <a href onClick={this.onStop}><i className='fa fa-stop'></i></a>
        </div>
        <div styleName='devider'></div>
        <div styleName='displayArea'>
          <div styleName={this.state.active ? 'activeDisplay' : 'inactiveDisplay'}></div>
        </div>
      </div>
    );
  }
}

export default CSSModules(MorseCodePlayer, Object.assign({}, style, buttonStyles));
