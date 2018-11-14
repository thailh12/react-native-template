import React from 'react';
import { View, Text, Button } from 'react-native';
import { CounterContainer } from '../containers/CounterContainer';
import { Subscribe } from 'unstated';
import { Title } from '../elements/Title';
class CounterView extends React.Component {
  render() {
    return (
      <View>
        <Title>{this.props.data.state.count}</Title>
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
