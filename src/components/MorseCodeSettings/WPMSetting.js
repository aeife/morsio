import React from 'react';
import CSSModules from 'react-css-modules';
import style from './MorseCodeSettings.scss';

export default class WPMSetting extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    settings: React.PropTypes.object.isRequired,
    setSettings: React.PropTypes.func.isRequired
  };

  onSettingsChange = (e) => {
    e.preventDefault();
    this.props.setSettings({wpm: this.refs.wpm.value});
  };

  render () {
    return (
      <div styleName='settingsControlGroup'>
        <label htmlFor='wpm'>WPM</label>
        <input type='range' min='3' max='25' ref='wpm' name='wpm' onChange={this.onSettingsChange} value={this.props.settings.get('wpm')} />
      </div>
    );
  }
}

export default CSSModules(WPMSetting, style);
