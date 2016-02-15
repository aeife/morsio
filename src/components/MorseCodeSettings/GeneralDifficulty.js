import React from 'react';
import Rating from 'react-rating';
import CSSModules from 'react-css-modules';
import style from './MorseCodeSettings.scss';
import { difficultySteps, defaultDifficulty } from 'services/morseCode/morseCode';

export default class GeneralDifficulty extends React.Component {
  constructor (props) {
    super(props);

    this.state = {difficulty: defaultDifficulty};
  }

  static propTypes = {
    setSettings: React.PropTypes.func.isRequired
  };

  onDifficultyChange = (difficulty) => {
    this.props.setSettings(difficultySteps[difficulty]);
    this.setState({difficulty});
  };

  render () {
    return (
      <div styleName='difficultyGroup'>
        <label htmlFor='difficulty' styleName='difficultyLabel'>Difficulty</label>
        <div styleName='difficultyInput'>
          <Rating name='difficulty' onChange={this.onDifficultyChange}
                  initialRate={this.state.difficulty} empty='fa fa-circle-o fa-lg' full='fa fa-circle fa-lg'/>
        </div>
      </div>
    );
  }
}

export default CSSModules(GeneralDifficulty, style);
