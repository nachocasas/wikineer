import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import styled from 'styled-components';
import { InstantSearch } from "react-instantsearch/native";
import {
  connectInfiniteHits
} from "react-instantsearch/connectors";

class List extends Component {

   /* if there are still results, you can
  call the refine function to load more */
  onEndReached = () => {
    if (this.props.hasMore) {
      this.props.refine();
    }
  };

  render () {
    return (
      <FlatList
        data={this.props.hits}
        onEndReached={this.onEndReached}
        keyExtractor={(item, index) => item.objectID}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Text>
                  {item.name}
                </Text>
                <Text>
                  {item.type}
                </Text>
              </View>
            </View>
          );
        }}
      />
      );
    }
}

 export default ConnectedList = connectInfiniteHits(List);