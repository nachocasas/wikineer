import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styled from 'styled-components';
import fakeData from '../data/searchResult';

const SEARCH_PLACEHOLDER = 'Search...';

const ContainerView = styled.View`
    flex: 1;
    background-color: #fff;
    padding: 20px;
`;

const SearchField = styled.TextInput`
    width: 90%;
    height: 50px;
    border: 3px solid #789dd6;
    align-self: center;
    border-radius: 5px;
    font-size: 24px;
    padding: 8px;
    `
const ScrollStyledView = styled.ScrollView.attrs({
    contentContainerStyle : props => {
      return {
        flex: 1,
        backgroundColor: '#fff'
      }
    }
  })``;



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Wikineer'
  };
  
  constructor(props){
    super(props);
    this.state = {
      text : SEARCH_PLACEHOLDER
    }
  }

  _onFocus = () => {
    if(this.state.text == SEARCH_PLACEHOLDER) {
      this.setState( { text: '' });
    }
  }

  render() {
    return (
      <ContainerView>
        <ScrollStyledView>
          <View>
            <SearchField onFocus={ this._onFocus } value={ this.state.text } />
          </View>
        </ScrollStyledView>
      </ContainerView>
    );
  }
};
