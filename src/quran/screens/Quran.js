import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableHighlight } from 'react-native';

import { Fetch } from '../../public/services';

class Quran extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await Fetch('/surah');
    if (response.code === 200) {
      this.setState({ data: response.data, isLoading: false });
    }
  }

  render() {
    return !this.state.isLoading ? (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableHighlight
              style={{
                paddingVertical: 20,
                borderBottomColor: '#c9c9c9',
                borderBottomWidth: 1,
                alignItems: 'center'
              }}
              onPress={() => this.props.navigation.navigate('Surah', { number: item.number })}
            >
              <Text style={{ fontSize: 18 }}>
                {item.number}. {item.englishName} ({item.name})
              </Text>
            </TouchableHighlight>
          )}
        />
      </View>
    ) : (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default Quran;
