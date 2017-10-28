import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
        <Welcome.component />
      </Provider>
    ) 
    //   <Welcome.component />
      // if (this.state.view === 'login') {
      //   return (
      //     <Welcome.component onPress = {this.press} />
      //   );
      // }
      // else {
      //   return (
      //     <Plaid.component  
      //       onMessage = {this.onMessage}
      //     />
      //   )
      // }
  }

}
