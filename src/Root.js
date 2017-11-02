import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import reducers from 'reducers';
import { components } from '@components';
import { Provider, connect } from 'react-redux'
import { combineReducers, createStore } from 'redux';

const Navigation = components.nav;
const store = createStore(reducers);

// we only really need export a function here
export default () => {

  return <Provider store={store}>
    <Navigation />
  </Provider>;

}
