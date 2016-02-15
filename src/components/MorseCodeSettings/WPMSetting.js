import React from 'react';
import CSSModules from 'react-css-modules';
import style from './MorseCodeSettings.scss';
import Rcslider from 'rc-slider';

export default class WPMSetting extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    settings: React.PropTypes.object.isRequired,
    setSettings: React.PropTypes.func.isRequired
  };

  onSettingsChange = value => {
    this.props.setSettings({wpm: value});
  };

  render () {
    return (
      <div>
        <div styleName='settingsControlGroup'>
          <label htmlFor='wpm' styleName='settingsLabel'>WPM</label>
          <Rcslider min={0} max={25} value={this.props.settings.get('wpm')} onChange={this.onSettingsChange} styleName='settingsInput'/>
        </div>

      </div>
    );
  }
}

export default CSSModules(WPMSetting, style);
