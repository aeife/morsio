import React from 'react';
import { Link } from 'react-router';
import QRCode from 'qrcodejs';

export default class GeneratedData extends React.Component {
  constructor (props) {
    super(props);
    this.url = window.location.hostname + '/' + this.props.urlId;
  }

  componentDidMount () {
    new QRCode(document.getElementById('qrcode'), this.url);
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
        <div id='qrcode'></div>
      </div>
    );
  }
}

export default GeneratedData;
