import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Quran', { title: 'Al-Quran' })}
          >
            <Text>Al-Quran</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Tasbih', { title: 'Tasbih' })}
          >
            <Text>Tasbih</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '30%',
    paddingVertical: 10,
    alignItems: 'center'
  }
});

export default Home;
