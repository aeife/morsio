import React from 'react';

import QRCode from 'qrcodejs';

export default class GeneratedData extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    new QRCode(document.getElementById('qrcode'), 'test');
  }

  static propTypes = {
  };

  render () {
    return (
      <div>
        <h2>Generated Data</h2>
        <p>your link:</p>
        <a href=''>testlink..</a>
        <p>your qr code:</p>
        <div id='qrcode'></div>
      </div>
    );
  }
}

export default GeneratedData;
