import React from 'react';
import { Link } from 'react-router';

function MainLayout ({ children }) {
  return (
    <div className='page-container'>
      <div className='view-container'>
        <Link to='/'>Home</Link>
        {children}
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: React.PropTypes.element
};

export default MainLayout;
