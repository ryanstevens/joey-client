import React, { PropTypes, Component } from 'react';
import { WebView } from 'react-native';

class Plaid extends Component {
  render() {
    const {publicKey, selectAccount, env, product, clientName, webhook, style} = this.props;

    return <WebView
      style={{...style}}
      source={{uri: `https://cdn.plaid.com/link/v2/stable/link.html?key=${publicKey}&apiVersion=v2&env=${env}&product=${product}&clientName=${clientName}&isWebView=true&isMobile=true&webhook=${webhook}&selectAccount=${selectAccount}`}}
      onMessage={(e) => this.onMessage(e)}
    />
  }

  onMessage(e) {
    this.props.onMessage(JSON.parse(e.nativeEvent.data))
  }
}

Plaid.defaultProps = {
  publicKey: PropTypes.string.isRequired,
  onMessage: PropTypes.func.isRequired,
  env: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  clientName: PropTypes.string,
  webhook: PropTypes.string,
  style: PropTypes.object
}

Plaid.defaultProps = {
  clientName: 'JoeyFinancial',
  env: "sandbox",
  product: "auth,transactions",
  webhook: '',
  publicKey: 'ff962d1c86d7e4f7a273ffffaae5d4',
  style: {
    marginTop: 30
  }
};

export default Plaid;
