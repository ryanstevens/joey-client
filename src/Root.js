import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Plaid from '@components/plaid';
import Welcome from '@components/welcome';
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux';
import appReducers from 'reducers';


const store = createStore(appReducers);

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'login'
    };
  }
  render() {
    return (
      <Provider store={store}>
        <Welcome.component onPress={this.press} />
      </Provider>
    ) 
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

  press = () => {
    console.log('hi')
    this.setState({view: 'plaid'});
  }

  onMessage = (e) => {
    if (e && e.eventName === 'EXIT') this.setState({ view: 'login'});
    console.log(e);
  }
}
