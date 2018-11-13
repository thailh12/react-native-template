import React from 'react';
import { Container } from 'unstated';

class HomeContainer extends Container {
  // init state with default value
  state = { name: 'Ha Thai Lam' };

  /**
   *  state mutation
   */
  setName = name => {
    this.setState({ name });
  };
}

export { HomeContainer };
