import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import style from './MainMenu.scss';
import pageStyle from 'styles/page.scss';

export default class MainMenu extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <nav styleName='nav'>
        <div styleName='container'>
          <ul styleName='navList'>
            <li styleName='navItem'>
              <Link to='/' styleName='navLink' activeClassName={style.activeNavLink}>Home</Link>
            </li>
            <li styleName='navItem'>
              <Link to='/test1' styleName='navLink' activeClassName={style.activeNavLink}>Test1</Link>
            </li>
            <li styleName='navItem'>
              <Link to='/test2' styleName='navLink' activeClassName={style.activeNavLink}>Test2</Link>
            </li>
          </ul>
          <ul styleName='navListRight'>
            <li styleName='navItem'>
              <Link to='/test3' styleName='navLink' activeClassName={style.activeNavLink}>Test3</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default CSSModules(MainMenu, Object.assign({}, style, pageStyle));
