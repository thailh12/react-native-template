import React from 'react';
import { Container } from 'unstated';

class HomeContainer extends Container {
  state = { name: 'Ha Thai Lam' };
  setName = name => {
    this.setState({ name });
  };
}

export { HomeContainer };
