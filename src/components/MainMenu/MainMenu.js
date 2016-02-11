import React from 'react';
import { Link } from 'react-router';

export default class MainMenu extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <Link to='/'>Home</Link>
    );
  }
}

export default MainMenu;
