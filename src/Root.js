import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { components, reducers } from '@components';
import { Provider, connect } from 'react-redux'
import { combineReducers, createStore } from 'redux';
import { StackNavigator } from 'react-navigation';
import { addNavigationHelpers } from 'react-navigation';

const AppNavigator = StackNavigator({
  welcome: {
    screen: components.welcome
  },
  plaid: {
    screen: components.plaid
  }
});

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('welcome'));

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

const store = createStore(combineReducers(Object.assign(
  {}, 
  reducers,
  { nav: navReducer }
)));

class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);


// we only really need export a function here
export default () => {

  return <Provider store={store}>
    <AppWithNavigationState />
  </Provider>;

}
