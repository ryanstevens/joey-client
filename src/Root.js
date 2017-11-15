import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import reducers from 'reducers';
import { components } from '@components';
import { Provider, connect } from 'react-redux'
import { combineReducers, createStore } from 'redux';

const store = createStore(function(state, action) {
  let newState = reducers(state, action);
  console.log('\n\n\n\n*********************************\n\nAction', action);
  console.log('Prev state', state);
  console.log('New State', newState);
  return newState;
});

// we only really need export a function here
export default () => {
  return <Provider store={store}>
             <components.top_nav />
        </Provider>;

}