import React from 'react';
import MainMenu from 'components/MainMenu/MainMenu';

function MainLayout ({ children }) {
  return (
    <div>
        <MainMenu />
        {children}
    </div>
  );
}

MainLayout.propTypes = {
  children: React.PropTypes.element
};

export default MainLayout;
