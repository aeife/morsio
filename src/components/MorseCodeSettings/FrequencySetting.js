import React from 'react';
import CSSModules from 'react-css-modules';
import style from './MorseCodeSettings.scss';

export default class FrequencySetting extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    settings: React.PropTypes.object.isRequired,
    setSettings: React.PropTypes.func.isRequired
  };

  onSettingsChange = (e) => {
    e.preventDefault();
    this.props.setSettings({frequency: this.refs.frequency.value});
  };

  render () {
    return (
      <div styleName='settingsControlGroup'>
        <label htmlFor='frequency'>Frequency</label>
        <input type='range' min='200' max='1000' ref='frequency' name='frequency' onChange={this.onSettingsChange} value={this.props.settings.get('frequency')} />
      </div>
    );
  }
}

export default CSSModules(FrequencySetting, style);
