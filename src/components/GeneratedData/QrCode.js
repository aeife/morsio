import React from 'react';
import QRCode from 'qrcodejs';

export default class QrCode extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    new QRCode(document.getElementById('qrcode'), this.props.text);
  }

  static propTypes = {
    text: React.PropTypes.string.isRequired
  };

  render () {
    return (
      <div id='qrcode'></div>
    );
  }
}

export default QrCode;
