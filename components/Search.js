import React, { Component } from 'react';
import styled from 'styled-components';
import { InstantSearch } from "react-instantsearch/native";
import {
  connectSearchBox
} from "react-instantsearch/connectors";

class Search extends Component {

  render(){
    return(
      <SearchField 
        onFocus={ this.props.onFocusEvent }
        onChangeText={text => this.props.refine(text)}
        placeholder="Search"
        value={this.props.currentRefinement} />
    );
  }
}

export default ConnectedSearchBar = connectSearchBox(Search);

const SearchField = styled.TextInput`
    width: 100%;
    height: 50px;
    border: 3px solid #789dd6;
    border-radius: 5px;
    font-size: 24px;
    padding: 8px;
    `