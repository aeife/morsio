import React from 'react';

export default class MorseCodeSettings extends React.Component {
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
      <div>
        <input type='text' ref='wpm' placeholder='wpm' onChange={this.onSettingsChange} />
      </div>
    );
  }
}

export default MorseCodeSettings;
