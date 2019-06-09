import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableHighlight
            underlayColor="#e4e4e4"
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Quran', { title: 'Al-Quran' })}
          >
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../public/assets/icon/koran-icon.svg.hi.png')}
                style={{ width: 70, height: 50, marginBottom: 10 }}
              />
              <Text>Al-Quran</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#e4e4e4"
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Tasbih', { title: 'Tasbih' })}
          >
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../public/assets/icon/ea94539b59d5003b4e00b78906833479-tasbih-rosary-islam-stroke-icon-by-vexels.png')}
                style={{ width: 50, height: 50, marginBottom: 10 }}
              />
              <Text>Tasbih</Text>
            </View>
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
