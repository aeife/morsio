import React from 'react';

import GeneratedData from 'components/GeneratedData/GeneratedData';

class GeneratedView extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
  };

  render () {
    return (
      <div>
        <h1>Your generated data</h1>
        <GeneratedData />
      </div>
    );
  }
}

export default GeneratedView;
