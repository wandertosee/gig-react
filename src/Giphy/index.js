import React, { Component } from 'react';
import View from './View';
import giphyLoader from '../loaders/giphyLoader';
import '../css/giphy.css';

export default class extends Component {
  state = { loading: true };
  load = this.load.bind(this);

  async load(...args) {
    try {
      this.setState({ loading: true, error: false });
      const data = await giphyLoader(...args);
      this.setState({ loading: false, data });
    } catch (ex) {
      this.setState({ loading: false, error: true });
    }
  }

  render() {
    return <View initialQuery="pun husky" {...this.props} {...this.state} onLoad={this.load} />;
  }
}
