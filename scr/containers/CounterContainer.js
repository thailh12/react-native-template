import { Container } from 'unstated';

export class CounterContainer extends Container {
  // init state with default value
  state = { count: 0 };

  /**
   *  state mutation
   */
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
}
