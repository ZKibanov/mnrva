/* eslint-disable no-use-before-define */
// bug occurs due to mismatch of @typescript-eslint versions in react-scripts and your local package.json 
import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(){
      super()
      this.state = {
    hasError: false,
  };
}

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{ color: 'red' }}>Something went wrong</h1>;
    }
    return this.props.children;
  }
}
/* eslint-enable no-use-before-define */
