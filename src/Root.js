import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { components } from '@components';
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux';
import reducers from 'reducers';


const store = createStore(function rootReducer(state, action) {
  var state =  reducers(state, action);
  console.log('State', state);
  return state
});

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <components.welcome />
          <components.plaid />
          <components.navigation />
        </View>
      </Provider>
    ) 
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
    zIndex:0
  }
});
