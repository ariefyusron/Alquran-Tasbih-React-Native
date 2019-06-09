import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';

import Navigator from './src/public/navigation';

class App extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar backgroundColor="#b2c993" barStyle="light-content" />
        <Navigator />
      </Fragment>
    );
  }
}

export default App;
