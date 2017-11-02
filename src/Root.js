import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import reducers from 'reducers';
import { components } from '@components';
import { Provider, connect } from 'react-redux'
import { combineReducers, createStore } from 'redux';

const Navigation = components.nav;

// const AppNavigator = StackNavigator({
//   welcome: {
//     screen: components.welcome
//   },
//   plaid: {
//     screen: components.plaid
//   }
// });

// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('welcome'));

// const navReducer = (state = initialState, action) => {
//   const nextState = AppNavigator.router.getStateForAction(action, state);
//   return nextState || state;
// };

// const store = createStore(combineReducers(Object.assign(
//   {}, 
//   reducers,
//   { nav: navReducer }
// )));

// class App extends React.Component {
//   render() {
//     return (
//       <AppNavigator navigation={addNavigationHelpers({
//         dispatch: this.props.dispatch,
//         state: this.props.nav,
//       })} />
//     );
//   }
// }


const store = createStore(reducers);

// we only really need export a function here
export default () => {

  return <Provider store={store}>
    <Navigation />
  </Provider>;

}
