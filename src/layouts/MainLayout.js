import React from 'react';
import MainMenu from 'components/MainMenu/MainMenu';
import CSSModules from 'react-css-modules';
import style from 'styles/page.scss';

function MainLayout ({ children }) {
  return (
    <div>
        <MainMenu />
        <div styleName='container'>
          {children}
        </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: React.PropTypes.element
};

export default CSSModules(MainLayout, style);
