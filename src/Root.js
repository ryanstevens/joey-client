import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Plaid from '@components/plaid';
import Welcome from '@components/welcome';
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux';
import reducers from 'reducers';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.store = createStore(function rootReducer(state, action) {
      return reducers(state, action);
    });

    console.log("STATE", this.store.getState());
  }

  render() {
    return (
      <Provider store={this.store}>
        <View style={styles.container}>
          <Welcome.component />
          <Plaid.component  />
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
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  }
});
