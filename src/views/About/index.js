import React from 'react';
import CSSModules from 'react-css-modules';
import style from './About.scss';

class AboutView extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1 styleName='mainHeading'>About</h1>
      </div>
    );
  }
}

export default CSSModules(AboutView, style);
