import React from 'react';
import Rating from 'react-rating';
import CSSModules from 'react-css-modules';
import style from './MorseCodeSettings.scss';
import { difficultySteps, defaultDifficulty } from 'services/morseCode/morseCode';

export default class GeneralDifficulty extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    setSettings: React.PropTypes.func.isRequired
  };

  onDifficultyChange = (difficulty) => {
    this.props.setSettings(difficultySteps[difficulty]);
  };

  render () {
    return (
      <div styleName='settingsControlGroup'>
        <label htmlFor='difficulty'>Difficulty</label>
        <Rating name='difficulty' onChange={this.onDifficultyChange} initialRate={defaultDifficulty} empty='fa fa-circle-o fa-lg' full='fa fa-circle fa-lg'/>
      </div>
    );
  }
}

export default CSSModules(GeneralDifficulty, style);
