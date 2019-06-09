import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  TextInput,
  Vibration
} from 'react-native';

class Tasbih extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      max: 33,
      visible: false
    };
  }

  handleChange() {
    if (this.state.number < this.state.max) {
      this.setState({ number: this.state.number + 1 });
    } else {
      Vibration.vibrate(200);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.visible}
          transparent
          onRequestClose={() => this.setState({ visible: false })}
          animationType="fade"
        >
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                backgroundColor: '#fff',
                width: '80%',
                paddingVertical: 30,
                borderRadius: 10
              }}
            >
              <TextInput
                placeholder="Max"
                onChangeText={text => this.setState({ max: text })}
                keyboardType="number-pad"
              />
            </View>
          </View>
        </Modal>
        <View style={{ padding: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Max: {this.state.max}</Text>
            <TouchableOpacity onPress={() => this.setState({ visible: true })}>
              <Text>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <TouchableHighlight
            onPress={() => this.handleChange()}
            style={{
              backgroundColor: 'green',
              borderRadius: 200 / 2,
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{ fontSize: 100, fontWeight: 'bold', marginBottom: 10 }}>
              {this.state.number}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.setState({ number: 0 })}
            style={{
              backgroundColor: 'red',
              width: 100,
              paddingVertical: 10
            }}
          >
            <Text>Reset</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Tasbih;
