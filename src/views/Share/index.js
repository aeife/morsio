import React from 'react';
import { connect } from 'react-redux';

import { actions as sharedMorseCodeActions } from 'redux/actions/sharedMorseCode';
import MorseCodePlayer from 'components/MorseCodePlayer/MorseCodePlayer';

class ShareView extends React.Component {
  constructor (props) {
    super(props);

    this.props.requestSharedCode(this.props.routeParams.urlId);
  }

  static propTypes = {
    routeParams: React.PropTypes.object.isRequired,
    sharedMorseCode: React.PropTypes.object,
    requestSharedCode: React.PropTypes.func
  };

  render () {
    return (
      <div>
        {this.props.sharedMorseCode.get('message') ? (
          <MorseCodePlayer message={this.props.sharedMorseCode.get('message')} settings={this.props.sharedMorseCode.get('settings')} />
        ) : (
          <p>loading....</p>
        )}
      </div>
    );
  }
}

function select (state) {
  return {
    sharedMorseCode: state.sharedMorseCode
  };
}

export default connect(select, {...sharedMorseCodeActions})(ShareView);
