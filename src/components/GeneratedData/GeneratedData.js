import React from 'react';
import { Link } from 'react-router';
import QrCode from './QrCode';

export default class GeneratedData extends React.Component {
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
        <h2>Generated Data</h2>
        <p>your link:</p>
        <Link to={'/' + this.props.urlId}>{this.url}</Link>
        <p>your qr code:</p>
        <QrCode text={this.url}></QrCode>
      </div>
    );
  }
}

export default GeneratedData;
