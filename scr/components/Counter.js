import React from 'react';
import { View, Text, Button } from 'react-native';
import { CounterContainer } from '../containers/CounterContainer';
import { Subscribe } from 'unstated';

class CounterView extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.data.state.count}</Text>
        <Button onPress={() => this.props.data.increment()} title="increment" />
        <Button onPress={() => this.props.data.decrement()} title="decrement" />
      </View>
    );
  }
}

export class Counter extends React.Component {
  render() {
    return (
      <Subscribe to={[CounterContainer]}>
        {data => <CounterView data={data} />}
      </Subscribe>
    );
  }
}
