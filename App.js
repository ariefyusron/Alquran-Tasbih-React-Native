import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import Navigator from './src/public/navigation';

class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <StatusBar backgroundColor="#b2c993" barStyle="light-content" />
        <Navigator />
      </View>
    );
  }
}

export default App;
