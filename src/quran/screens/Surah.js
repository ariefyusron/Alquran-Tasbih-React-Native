import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';

import { Fetch } from '../../public/services';

class Surah extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: false,
      isLoadingUpdate: false,
      offset: 0,
      isPagination: true
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await Fetch(
      `/surah/${this.props.navigation.getParam('number')}?offset=${this.state.offset}&limit=20`
    );
    if (response.code === 200) {
      this.setState({
        data: response.data.ayahs,
        isLoading: false,
        offset: this.state.offset + 20,
        isPagination: !(response.data.ayahs.length < 20)
      });
    }
  }

  onEndReached = async () => {
    if (!this.state.isLoadingUpdate) {
      this.setState({ isLoadingUpdate: true });
      const response = await Fetch(
        `/surah/${this.props.navigation.getParam('number')}?offset=${this.state.offset}&limit=20`
      );
      if (response.code === 200) {
        this.setState({
          data: this.state.data.concat(response.data.ayahs),
          isLoadingUpdate: false,
          offset: this.state.offset + 20,
          isPagination: !(response.data.ayahs.length < 20)
        });
      }
    }
  };

  render() {
    return !this.state.isLoading ? (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={this.state.isPagination ? this.onEndReached : false}
          ListFooterComponent={
            this.state.isLoadingUpdate
              ? () => (
                  <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" />
                  </View>
                )
              : null
          }
          renderItem={({ item }) => (
            <View
              style={{
                paddingVertical: 20,
                borderBottomColor: '#c9c9c9',
                borderBottomWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10
              }}
            >
              <Text style={{ fontSize: 18 }}>{item.numberInSurah}</Text>
              <View style={{ flex: 1, alignItems: 'flex-end', paddingLeft: 10 }}>
                <Text style={{ fontSize: 24 }}>{item.text}.</Text>
              </View>
            </View>
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

export default Surah;
