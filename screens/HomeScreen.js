import React, { Component } from 'react';
import firebase from 'firebase';
require("firebase/firestore");

import { InstantSearch } from "react-instantsearch/native";
import { firebaseConfig, algiolaConfig } from './config.js'

import {
  Image,
  Platform,
  ScrollView,
  TextInput,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import styled from 'styled-components';
import ConnectedSearchBar from '../components/Search';
import ConnectedList from '../components/List';

const SEARCH_PLACEHOLDER = 'Search...';


firebase.initializeApp(firebaseConfig);

const firestoreSettings = {
  timestampsInSnapshots: true
}


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Wikineer'
  };
  
  constructor(props){
    super(props);
    this.state = {
      text : SEARCH_PLACEHOLDER
    }
    this.db = firebase.firestore();
    this.db.settings(firestoreSettings);
  }

 
  _onTextChange = (text) => {
      this.setState({ text });
  }

  _onSearch = () => {
    console.log(this.state.text)
    this.db.collection("items").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(doc.data());
      });
    });
  }

  render() {
    return (
      <ContainerView>
        <ScrollStyledView>
          <InstantSearch
            appId={algiolaConfig.appId}
            apiKey={algiolaConfig.apiKey}
            indexName={algiolaConfig.indexName}
          >
          <Form>
            <ConnectedSearchBar/>
            <SearchButton onPress={ this._onSearch }>
              <SearchButtonText>Search</SearchButtonText>
            </SearchButton>
          </Form>
          <HomeBody>
            <ConnectedList />
          </HomeBody>
          </InstantSearch>
        </ScrollStyledView>
      </ContainerView>
    );
  }
};

// <HomeScreenImage source={ require('../assets/images/homescreen.jpg') } />
const ContainerView = styled.View`
    flex: 1;
    background-color: #fff;
    padding-top: 20px;
`;

const ScrollStyledView = styled.ScrollView.attrs({
    contentContainerStyle : props => {
      return {
        flex: 1,
        backgroundColor: '#fff'
      }
    }
  })``;

  const Form = styled.View`
    flex: 1;
    width: 90%;
    align-items: center;
    align-self: center;
  `;

  const HomeScreenImage = styled.Image`
    width: 100%;
    height: 300px;
    border-radius: 10px;
  `;

  const HomeBody = styled.View`
    margin-top: 50px;
    opacity: .4;
  `;

  const SearchButton = styled.TouchableHighlight`
    width: 100%;
    height: 55px;
    background-color: #649ad7;
    padding: 15px;
    margin-top: 20px;
  `;
  const SearchButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
    text-align: center;
  `;
