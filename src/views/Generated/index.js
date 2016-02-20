import React from 'react';
import { connect } from 'react-redux';
import { actions as userMorseCodeActions } from 'redux/actions/userMorseCode';
import GeneratedData from 'components/GeneratedData/GeneratedData';
import CSSModules from 'react-css-modules';
import style from './Generated.scss';

class GeneratedView extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    userMorseCode: React.PropTypes.object
  };

  render () {
    return (
      <div>
        <h1 styleName='mainHeading'>Share your morse code</h1>
        <GeneratedData urlId={this.props.userMorseCode.get('urlId')} />
      </div>
    );
  }
}

function select (state) {
  return {
    userMorseCode: state.userMorseCode
  };
}

export default connect(select, {...userMorseCodeActions})(CSSModules(GeneratedView, style));
