import React from 'react';
import CSSModules from 'react-css-modules';
import style from './MorseCodeSettings.scss';
import GeneralDifficulty from './GeneralDifficulty';
import WPMSetting from './WPMSetting';
import FrequencySetting from './FrequencySetting';

export default class MorseCodeSettings extends React.Component {
  constructor (props) {
    super(props);

    this.state = {advanced: false};
  }

  static propTypes = {
    settings: React.PropTypes.object.isRequired,
    setSettings: React.PropTypes.func.isRequired
  };

  onSettingsChange = (e) => {
    e.preventDefault();
    this.props.setSettings({wpm: this.refs.wpm.value});
  };

  toggleAdvancedSettings = (e) => {
    e.preventDefault();
    this.setState({advanced: !this.state.advanced});
  };

  render () {
    return (
      <form styleName='settingsForm'>
        <p>
          {!this.state.advanced ? (
            <a href styleName='advancedLink' onClick={this.toggleAdvancedSettings}>advanced settings</a>
          ) : (
            <a href styleName='advancedLink' onClick={this.toggleAdvancedSettings}>simple settings</a>
          )}
        </p>
        {this.state.advanced ? (
          <fieldset>
            <WPMSetting settings={this.props.settings} setSettings={this.props.setSettings} />
            <FrequencySetting settings={this.props.settings} setSettings={this.props.setSettings} />
          </fieldset>
        ) : (
          <fieldset>
            <GeneralDifficulty setSettings={this.props.setSettings} />
          </fieldset>
        )}
      </form>
    );
  }
}

export default CSSModules(MorseCodeSettings, style);
