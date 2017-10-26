import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, StatusBarIOS, Platform } from 'react-native';
import Plaid from '@components/Plaid';
import Welcome from '@components/welcome';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'login'
    };
  }
  render() {
    if (this.state.view === 'login') {
      return (
        <View style={styles.container}>
          <Welcome.component onPress = {this.press} />
        </View>
      );
    }
    else {
      return (
        <Plaid.component  
           onMessage = {this.onMessage}
        />
      )
    }
  }

  press = () => {
    this.setState({view: 'plaid'});
  }

  onMessage = (e) => {
    if (e && e.eventName === 'EXIT') this.setState({ view: 'login'});
    console.log(e);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  }
});
