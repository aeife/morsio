import React from 'react';
import MainMenu from 'components/MainMenu/MainMenu';

function MainLayout ({ children }) {
  return (
    <div className="page-container">
      <div className="view-container">
        <MainMenu />
        {children}
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: React.PropTypes.element
};

export default MainLayout;
