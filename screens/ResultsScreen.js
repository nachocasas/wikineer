import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class ResultsScreen extends Component {
  static navigationOptions = {
    title: 'Results',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
