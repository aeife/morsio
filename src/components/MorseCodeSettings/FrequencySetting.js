import React from 'react';
import CSSModules from 'react-css-modules';
import style from './MorseCodeSettings.scss';
import Rcslider from 'rc-slider';

export default class FrequencySetting extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    settings: React.PropTypes.object.isRequired,
    setSettings: React.PropTypes.func.isRequired
  };

  onSettingsChange = value => {
    this.props.setSettings({frequency: value});
  };

  render () {
    return (
      <div styleName='settingsControlGroup'>
        <label htmlFor='frequency' styleName='settingsLabel'>Frequency</label>
        <Rcslider min={200} max={1000} value={this.props.settings.get('frequency')} onChange={this.onSettingsChange} styleName='settingsInput'/>
      </div>
    );
  }
}

export default CSSModules(FrequencySetting, style);
