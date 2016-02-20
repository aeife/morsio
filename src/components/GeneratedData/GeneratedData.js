import React from 'react';
import { Link } from 'react-router';
import QrCode from './QrCode';
import CSSModules from 'react-css-modules';
import style from './GeneratedData.scss';

class GeneratedData extends React.Component {
  constructor (props) {
    super(props);
    this.url = window.location.hostname + '/' + this.props.urlId;
  }

  static propTypes = {
    urlId: React.PropTypes.string.isRequired
  };

  render () {
    return (
      <div>
        <div styleName='generatedDataWrapper'>
          <div styleName='qrCodeSection'>
            <QrCode text={this.url} />
          </div>
          <div styleName='linkSection'>
            <h3>Your generated Link</h3>
            <Link to={'/' + this.props.urlId} styleName='shareLink'>{this.url}</Link>
            <p>Send someone this link to share your generated morse code.</p>
            <p>Or use the QR Code. It directly leads to this page.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(GeneratedData, style);
